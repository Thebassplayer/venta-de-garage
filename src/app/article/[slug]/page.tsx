"use client";
import { Article as ArticleData } from "@/app/types";
import { CldImage } from "next-cloudinary";
import { useEffect, useState } from "react";

const Article = ({ params }: { params: { slug: string } }): JSX.Element => {
  const { slug } = params;

  const [articleData, setArticleData] = useState<
    | ArticleData
    | {
        titulo: "";
        marca: "";
        modelo: "";
        detalles: "";
        precio: "";
        imagen1: "";
        imagen2: "";
        imagen3: "";
        comentarios: "";
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

  return (
    <div className="h-screen w-screen">
      <h1 className="text-center text-2xl">{titulo}</h1>
      <div className="mx-10 w-full object-cover h-1/2 grid grid-cols-3 gap-4">
        <div className="relative">
          <CldImage
            height={300}
            width={300}
            src={imagen1}
            alt={titulo}
            crop="fill"
          />
        </div>
        <div className="relative">
          <CldImage
            height={300}
            width={300}
            src={imagen2}
            alt={titulo}
            crop="fill"
          />
        </div>
        <div className="relative">
          <CldImage
            height={300}
            width={300}
            src={imagen3}
            alt={titulo}
            crop="fill"
          />
        </div>
      </div>
      <div>
        <p>Marca: {articleData.marca}</p>
        <p>Modelo: {articleData.modelo}</p>
        <p>Detalle: {articleData.detalles}</p>
        <p>Precio: {articleData.precio}</p>
      </div>
    </div>
  );
};

export default Article;
