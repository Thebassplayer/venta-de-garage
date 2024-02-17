"use client";
import React from "react";
import useGoogleSheetData from "./hooks/UseGoogleSheetData";
import Card from "./components/Card";
import CompartirPorWhatsAppButton from "./components/CompartirPorWhatsappButton";
import WhatsAppButton from "./components/WhatsAppButton";

const whatsappMessage = "Hola! estoy interesad@ en este artículo:";

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
    <main className="p-3">
      <h1 className="py-4 text-center text-2xl font-bold">Venta de Garage</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tableData.map((article, index) => {
          if (article.vendido === "TRUE") return;
          return <Card key={index} article={article as any} />;
        })}
      </div>
      <div className="fixed bottom-4 right-2 z-50 flex justify-between gap-4 px-4">
        <CompartirPorWhatsAppButton buttonVersion="compact" />
        <WhatsAppButton
          buttonVersion="compact"
          phoneNumber="541133449591"
          message={`${whatsappMessage}`}
        />
      </div>
    </main>
  );
}
