"use client";
import React from "react";
import useGoogleSheetData from "./hooks/UseGoogleSheetData";
import Card from "./components/Card";

export default function Home() {
  const { loading, error, tableTitles, tableData } = useGoogleSheetData();

  console.log(tableData);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="p-3">
      <h1 className="text-center text-2xl py-4">Venta de Garage</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tableData.map((article, index) => {
          if (article.vendido === "TRUE") return;
          return <Card key={index} article={article as any} />;
        })}
      </div>
    </main>
  );
}
