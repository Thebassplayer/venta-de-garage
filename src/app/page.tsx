"use client";
import React from "react";
import useGoogleSheetData from "./hooks/UseGoogleSheetData";
import Card from "./components/Card";
import Footer from "./components/Footer";
import MainNav from "./components/MainNav";

const whatsappMessage = "Hola! estoy interesad@ en este artículo:";
const whattsappShareMessage =
  "Hola! te comparto este  sitio con artículos a la venta:";

export default function Home() {
  const { loading, error, tableData } = useGoogleSheetData();

  if (loading) {
    return (
      <main className="h-screen w-screen">
        <div className="flex h-full w-full items-center justify-center">
          Loading...
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="h-screen w-screen">
        <div className="flex h-full w-full items-center justify-center">
          Error de conexion, intentelo mas tarde!
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="px-3 pb-3">
        <h1 className="font-anta py-4 text-center text-3xl font-bold">
          Venta de Garage
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {tableData.map((article, index) => {
            if (article.vendido === "TRUE") return;
            return <Card key={index} article={article as any} />;
          })}
        </div>
        <MainNav
          whatsappMessage={whatsappMessage}
          whattsappShareMessage={whattsappShareMessage}
        />
      </div>
      <Footer />
    </main>
  );
}
