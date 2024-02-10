"use client";
import React from "react";
import useGoogleSheetData from "./hooks/UseGoogleSheetData";

export default function Home() {
  const { loading, error, tableTitles, tableData } = useGoogleSheetData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="">
      <h1>Google Sheet Data</h1>
      {tableData.map((row, index) => (
        <div key={index} className="grid grid-cols-2 border border-red-400">
          {tableTitles.map((title, titleIndex) => (
            <div key={titleIndex} className="">
              <span className="text-lg bg-slate-600">{title}: </span>
              <span>{row[title]}</span>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}
