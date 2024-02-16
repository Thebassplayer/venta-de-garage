"use client";
import HomeButton from "@/app/components/HomeButton";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import { Article as ArticleData } from "@/app/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const WhattsappDefaultMessage = "Hola! estoy interesad@ en este artículo:";

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
    imagen4,
    imagen5,
    imagen6,
    vendido,
  } = articleData;

  const arrayOfImages = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6];

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
    <main className="w-screen p-4 flex justify-center flex-col">
      <div className="rounded-sm border border-black h-full flex flex-col relative bg-slate-100">
        <HomeButton />
        <h1 className="text-center font-bold text-2xl md:text-4xl pb-8 pt-10 md:py-6 ocean_gradient px-4">
          {titulo || ""}
        </h1>
        <div className="relative justify-evenly flex gap-4 px-10 w-full flex-wrap">
          {arrayOfImages.map((imagen, index) => {
            if (!imagen || imagen === "") {
              return null;
            } else {
              return (
                <Image
                  key={index}
                  height={300}
                  width={300}
                  src={imagen}
                  alt={titulo}
                />
              );
            }
          })}
        </div>

        <div className="w-full px-6 py-6">
          <p className="py-2">
            <span className="underline-offset-2 underline lg:text-lg">
              Marca:{" "}
            </span>
            <span className="lg:text-lg">{marca}</span>
          </p>
          <p className="py-2">
            <span className="underline-offset-2 underline lg:text-lg">
              Modelo:{" "}
            </span>
            <span className="lg:text-lg">{modelo}</span>
          </p>
          <p className="py-2">
            <span className="underline-offset-2 underline lg:text-lg">
              Detalle:{" "}
            </span>
            <span className="lg:text-lg">{detalles}</span>
          </p>
          <p className="py-2">
            <span className="underline-offset-2 underline lg:text-lg">
              Precio:{" "}
            </span>
            <span className="lg:text-lg">{precio}</span>
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
