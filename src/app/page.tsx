"use client";
import React from "react";
import Card from "./components/Card";
import MainNav from "./components/MainNav";
import Header from "./components/Header";
import Loading from "./components/Loading";
import useArticlesData from "./hooks/useArticlesData";

const whatsappMessage = "Hola! estoy interesad@ en este artículo:";
const whattsappShareMessage =
  "Hola! te comparto este  sitio con artículos a la venta:";

export default function Home() {
  const { loading, error, tableData } = useArticlesData();

  if (loading) {
    return <Loading />;
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
    <main className="relative">
      <Header />
      <div className="px-3 pb-3 pt-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {tableData.map((article, index) => {
            if (article.vendido === "TRUE") return;
            return <Card key={index} article={article as any} />;
          })}
        </div>
        <MainNav
          whatsappMessage={whatsappMessage}
          whattsappShareMessage={whattsappShareMessage}
          className="fixed bottom-4 right-4 z-50 md:bottom-14 md:right-1/2 md:translate-x-1/2"
        />
      </div>
    </main>
  );
}
