import React from "react";
import Card from "./components/Card";
import MainNav from "./components/MainNav";
import Header from "./components/Header";
import { Article } from "./types";

const whatsappMessage = "Hola! estoy interesad@ en este artículo:";
const whattsappShareMessage =
  "Hola! te comparto este  sitio con artículos a la venta:";

const localUrl = process.env.LOCAL_URL;
const articlesEndpoint = process.env.ARTICLES_ENDPOINT;

async function getData(): Promise<{ tableData: Article[] }> {
  const res = await fetch(`${localUrl}${articlesEndpoint}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const { tableData } = await getData();

  return (
    <main className="relative flex w-full flex-col justify-center p-4">
      <Header />
      <div className="px-3 pb-3 pt-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {tableData.map((article, index) => {
            return <Card key={index} article={article as any} />;
          })}
        </div>
        <MainNav
          whatsappMessage={whatsappMessage}
          whattsappShareMessage={whattsappShareMessage}
          className="sticky bottom-4 z-50"
        />
      </div>
    </main>
  );
}
