import { AnyMxRecord } from "dns";
import { google } from "googleapis";

const client_email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const private_key = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const GoogleSheetRange = "Sheet1!T2";

export const GET = async (req: Request) => {
  try {
    if (!client_email || !private_key || !spreadsheetId || !GoogleSheetRange) {
      return new Response(
        JSON.stringify({ message: "Missing environment variables" }),
        {
          status: 500,
        },
      );
    }

    const client = new google.auth.JWT(
      client_email,
      undefined,
      private_key.split(String.raw`\n`).join("\n"),
      ["https://www.googleapis.com/auth/spreadsheets"],
    );

    const authorizeClient = () => {
      return new Promise<void>((resolve, reject) => {
        client.authorize((err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    };

    await authorizeClient();

    const gsapi = google.sheets({ version: "v4", auth: client });

    const opt = {
      spreadsheetId,
      range: GoogleSheetRange,
    };

    const data = await gsapi.spreadsheets.values.get(opt);

    const lastUpdate = data?.data?.values
      ? data?.data?.values[0][0]
      : "No data found";

    console.log(lastUpdate);

    return new Response(
      JSON.stringify({
        lastUpdate,
      }),
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(`ERROR: ${error}`), {
      status: 500,
    });
  }
};
