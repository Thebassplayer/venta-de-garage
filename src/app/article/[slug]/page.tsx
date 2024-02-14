"use client";
import { defaultImage } from "@/app/components/Card";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import { Article as ArticleData } from "@/app/types";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { useEffect, useState } from "react";

const Article = ({ params }: { params: { slug: string } }): JSX.Element => {
  const { slug } = params;

  const [articleData, setArticleData] = useState<ArticleData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/article/${slug}`);
      const data = await res.json();
      setArticleData(data);
    };
    fetchData();
  }, [slug]);

  if (!articleData) {
    return (
      <main className="w-screen h-screen">
        <div className="w-full h-full flex items-center justify-center">
          Loading...
        </div>
      </main>
    );
  }
  const {
    titulo,
    marca,
    modelo,
    detalles,
    precio,
    imagen1,
    imagen2,
    imagen3,
    vendido,
  } = articleData;

  if (vendido) {
    return (
      <main className="m-4 rounded-sm border border-black">
        <h1 className="text-center text-2xl py-3">Artículo vendido</h1>
      </main>
    );
  }

  return (
    <main className="m-4 rounded-sm border border-black">
      <h1 className="text-center text-2xl py-3">{titulo || ""}</h1>

      <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-4 px-10 w-full h-1/2">
        {[imagen1, imagen2, imagen3].map((imagen, index) => {
          if (!imagen || imagen === "") {
            return (
              <CldImage
                className="m-auto"
                key={index}
                height={300}
                width={300}
                src="https://res.cloudinary.com/dukkbmkvk/image/upload/c_scale,q_48,w_367/v1707601780/venta_garage/e9f01hh4kutrdbsen9bs.jpg"
                alt={titulo}
                crop="fill_pad"
              />
            );
          }

          return (
            <CldImage
              className="m-auto"
              key={index}
              height={300}
              width={300}
              src={imagen}
              alt={titulo}
              crop="fill_pad"
            />
          );
        })}
      </div>

      <div className="w-full p-4">
        <p>
          <span className="underline-offset-2 underline">Marca: </span>
          <span>{marca}</span>
        </p>
        <p>
          <span className="underline-offset-2 underline">Modelo: </span>
          <span>{modelo}</span>
        </p>
        <p>
          <span className="underline-offset-2 underline">Detalle: </span>
          <span>{detalles}</span>
        </p>
        <p>
          <span className="underline-offset-2 underline">Precio: </span>
          <span>{precio}</span>
        </p>
      </div>
      <div className="w-full flex justify-center my-4">
        <WhatsAppButton
          phoneNumber="541133449591"
          message={`Estoy interesad@ en ${titulo}`}
        />
      </div>
    </main>
  );
};

export default Article;
