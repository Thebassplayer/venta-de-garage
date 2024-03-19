import React from "react";
import Card from "./Card";
import { Article } from "../types";

const localUrl = process.env.LOCAL_URL;
const articlesEndpoint = process.env.ARTICLES_ENDPOINT;

async function getData(): Promise<{ tableData: Article[] }> {
  const res = await fetch(`${localUrl}${articlesEndpoint}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const tableData = await res.json();

  return tableData;
}

export default async function ProductCarrousell() {
  const { tableData } = await getData();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tableData.map((article, index) => {
        return <Card key={index} article={article as any} />;
      })}
    </div>
  );
}
