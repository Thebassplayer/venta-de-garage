import { google } from "googleapis";

export async function GET(req: Request, res: Response) {
  const client_email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const private_key = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  try {
    if (!client_email || !private_key || !spreadsheetId) {
      return new Response(
        JSON.stringify({ message: "Missing environment variables" }),
        {
          status: 500,
        }
      );
    }
    const client = new google.auth.JWT(client_email, undefined, private_key, [
      "https://www.googleapis.com/auth/spreadsheets",
    ]);

    client.authorize(async function (err) {
      if (err) {
        return new Response(JSON.stringify(err), {
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
      range: "Sheet1!A2:L42",
    };

    const data = await gsapi.spreadsheets.values.get(opt);

    return new Response(JSON.stringify(data.data.values), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
}
