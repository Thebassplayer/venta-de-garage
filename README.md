# Venta de Garage Webpage

## Overview

"Venta de Garage" is a webpage designed to facilitate the sale of items when you are moving or decluttering your home. It is built using Next.js, Google Sheets for data management, and Tailwind CSS for styling.

## Features

- **Easy Listing:** Quickly list items for sale along with relevant details.
- **Google Sheets Integration:** Utilize Google Sheets to manage and organize your listed items.
- **Responsive Design:** The webpage is designed to be responsive and accessible on various devices.
- **Tailwind CSS Styling:** Stylish and modern UI using Tailwind CSS.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building server-side rendered and statically generated web applications.
- [Google Sheets API](https://developers.google.com/sheets/api): Manage data using Google Sheets.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom user interfaces.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/venta-de-garage.git
   ```

2. Install dependencies:

   ```bash
   cd venta-de-garage
   npm install
   ```

3. Set up Google Sheets API credentials:

   Follow the instructions [here](https://developers.google.com/sheets/api/quickstart) to set up Google Sheets API and download the credentials file. Save it as `credentials.json` in the root folder.

4. Configure environment variables:

   Create a `.env.local` file in the root folder and add the following:

   ```env
   GOOGLE_SHEETS_API_KEY=your-api-key
   GOOGLE_SHEETS_SHEET_ID=your-sheet-id
   ```

   Replace `your-api-key` and `your-sheet-id` with your actual Google Sheets API key and sheet ID.

5. Run the application:

   ```bash
   npm run dev
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Contributing

Feel free to contribute by opening issues or creating pull requests. Follow the [contribution guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the [MIT License](LICENSE).
