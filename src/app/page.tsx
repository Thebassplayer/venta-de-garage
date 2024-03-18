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
    <main className="relative flex w-full flex-col justify-center p-4">
      <Header />
      <div className="px-3 pb-3 pt-16">
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
