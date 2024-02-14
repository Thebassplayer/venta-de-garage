"use client";
import React from "react";
import useGoogleSheetData from "./hooks/UseGoogleSheetData";
import Card from "./components/Card";

export default function Home() {
  const { loading, error, tableTitles, tableData } = useGoogleSheetData();

  if (loading) {
    return (
      <main className="w-screen h-screen">
        <div className="w-full h-full flex items-center justify-center">
          Loading...
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="w-screen h-screen">
        <div className="w-full h-full flex items-center justify-center">
          Error de conexion, intentelo mas tarde!
        </div>
      </main>
    );
  }

  return (
    <main className="p-3">
      <h1 className="text-center text-2xl py-4 font-bold">Venta de Garage</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tableData.map((article, index) => {
          if (article.vendido === "TRUE") return;
          return <Card key={index} article={article as any} />;
        })}
      </div>
    </main>
  );
}
