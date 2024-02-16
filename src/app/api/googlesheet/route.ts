import { google } from "googleapis";

const client_email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const private_key = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const GoogleSheetRange = process.env.GOOGLE_SHEETS_RANGE;

export const GET = async (req: Request) => {
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

    const authorizeClient = () => {
      return new Promise<void>((resolve, reject) => {
        client.authorize(err => {
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

    const rawRows: string[][] = data.data.values || [[]];
    const headers: string[] = rawRows.shift() || [];

    // Filter rows where "vendido" and "pausado" are not equal to "TRUE"
    const filteredRows = rawRows.filter(
      row =>
        row[headers.indexOf("titulo")] !== "" &&
        row[headers.indexOf("vendido")] !== "TRUE" &&
        row[headers.indexOf("pausado")] !== "TRUE"
    );

    const rows: Record<string, string>[] = filteredRows.map(row => {
      return row.reduce<Record<string, string>>((acc, cell, index) => {
        acc[headers[index]] = cell;
        return acc;
      }, {});
    });

    return new Response(
      JSON.stringify({
        tableTitles: headers,
        tableData: rows,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(`ERROR: ${error}`), {
      status: 500,
    });
  }
};
