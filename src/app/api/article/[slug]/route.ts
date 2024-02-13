import {
  articleArraytoObject,
  findArticleBySlug,
} from "@/utils/googleSheets/dataManipulation";
import { google } from "googleapis";

const client_email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const private_key = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

export const GET = async (req: Request) => {
  const { url } = req;
  const slug = url.split("/").pop();

  try {
    if (!client_email || !private_key || !spreadsheetId) {
      return new Response(
        JSON.stringify({ message: "Missing environment variables" }),
        {
          status: 500,
        }
      );
    }
    const client = new google.auth.JWT(
      client_email,
      undefined,
      private_key.split(String.raw`\n`).join("\n"),
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    client.authorize(async function (err) {
      if (err) {
        return new Response(JSON.stringify(`Google Auth error: ${err}`), {
          status: 500,
        });
      }
    });
    if (!client) {
      return new Response(
        JSON.stringify({ message: "Failed to authenticate" }),
        {
          status: 500,
        }
      );
    }
    const gsapi = google.sheets({ version: "v4", auth: client });

    const opt = {
      spreadsheetId,
      range: "Sheet1!A2:M42",
    };

    const data = await gsapi.spreadsheets.values.get(opt);

    const articles = data?.data?.values;

    if (!articles) {
      return new Response(JSON.stringify({ message: "No articles found" }), {
        status: 404,
      });
    }

    if (!slug) {
      return new Response(JSON.stringify({ message: "No slug found" }), {
        status: 404,
      });
    }
    // Get Titles
    const titles = articles[0];

    if (!titles) {
      return new Response(JSON.stringify({ message: "No titles found" }), {
        status: 404,
      });
    }

    const articleArray = findArticleBySlug(slug, articles);

    if (!articleArray) {
      return new Response(
        JSON.stringify({ message: "No article found with that slug" }),
        {
          status: 404,
        }
      );
    }

    // Transform the array into an object

    const article = articleArraytoObject(titles, articleArray);

    return new Response(JSON.stringify(article), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(`ERROR: ${error}`), {
      status: 500,
    });
  }
};
