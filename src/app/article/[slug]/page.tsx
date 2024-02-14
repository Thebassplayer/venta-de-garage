"use client";
import { defaultImage } from "@/app/components/Card";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import { Article as ArticleData } from "@/app/types";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { useEffect, useState } from "react";

const Article = ({ params }: { params: { slug: string } }): JSX.Element => {
  const { slug } = params;

  const [articleData, setArticleData] = useState<
    | ArticleData
    | {
        titulo: string;
        marca: string;
        modelo: string;
        detalles: string;
        precio: string;
        imagen1: string;
        imagen2: string;
        imagen3: string;
        comentarios: string;
      }
  >({
    titulo: "",
    marca: "",
    modelo: "",
    detalles: "",
    precio: "",
    imagen1: "",
    imagen2: "",
    imagen3: "",
    comentarios: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/article/${slug}`);
      const data = await res.json();
      setArticleData(data);
    };
    fetchData();
  }, [slug]);
  const { titulo, marca, modelo, detalles, precio, imagen1, imagen2, imagen3 } =
    articleData;

  console.log(imagen1, imagen2, imagen3);

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
        <WhatsAppButton />
      </div>
    </main>
  );
};

export default Article;
