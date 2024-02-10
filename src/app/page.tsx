"use client";
import React from "react";
import useGoogleSheetData from "./hooks/UseGoogleSheetData";
import Card from "./components/Card";

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
      <div className="grid grid-cols-4 gap-4">
        {tableData.map((article, index) => (
          <Card key={index} article={article} />
        ))}
      </div>
    </main>
  );
}
