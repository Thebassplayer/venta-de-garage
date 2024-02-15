"use client";
import HomeButton from "@/app/components/HomeButton";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import { Article as ArticleData } from "@/app/types";
import { CldImage } from "next-cloudinary";
import { useEffect, useState } from "react";

const WhattsappDefaultMessage = "Estoy interesad@ en este artículo:";

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
      <main className="w-screen md:h-[100svh] min-h-svh p-4">
        <div className="rounded-sm border border-black h-full flex justify-center items-center">
          <h1 className="text-center text-2xl md:text-4xl py-3 text-red-600">
            Artículo vendido
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="w-screen md:h-[100svh] p-4 min-h-svh">
      <div className="rounded-sm border border-black h-full flex flex-col relative">
        <HomeButton />
        <h1 className="text-center font-bold text-4xl pb-8 pt-16 md:py-6 ocean_gradient">
          {titulo || ""}
        </h1>

        <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-4 px-10 w-full">
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

        <div className="w-full px-4 py-6">
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
        <div className="w-full flex justify-center items-center my-4 grow">
          <WhatsAppButton
            phoneNumber="541133449591"
            message={`${WhattsappDefaultMessage} ${titulo}`}
          />
        </div>
      </div>
    </main>
  );
};

export default Article;
