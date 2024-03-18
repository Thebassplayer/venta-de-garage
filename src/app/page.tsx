import React from "react";
import Card from "./components/Card";
import MainNav from "./components/MainNav";
import Header from "./components/Header";
import { Article } from "./types";
import ProductCarrousell from "./components/ProductCarrousell";

const whatsappMessage = "Hola! estoy interesad@ en este artículo:";
const whattsappShareMessage =
  "Hola! te comparto este  sitio con artículos a la venta:";

export default function Home() {
  return (
    <main className="relative flex w-full grow flex-col justify-center">
      <Header />
      <div className="flex h-full grow flex-col justify-between px-3 pt-20">
        <ProductCarrousell />
        <MainNav
          whatsappMessage={whatsappMessage}
          whattsappShareMessage={whattsappShareMessage}
          className="sticky bottom-4 z-50"
        />
      </div>
    </main>
  );
}
