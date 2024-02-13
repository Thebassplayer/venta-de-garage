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

  console.log(imagen1, imagen2, imagen3);

  return (
    <div className="h-screen w-screen">
      <h1 className="text-center text-2xl">{titulo}</h1>
      <div className="px-10 w-full object-cover h-1/2 grid grid-cols-3 gap-4">
        {[imagen1, imagen2, imagen3].map((imagen, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center"
          >
            <CldImage
              height={300}
              width={300}
              src={imagen}
              alt={titulo}
              crop="fill"
            />
          </div>
        ))}
      </div>
      <div>
        <p>Marca: {marca}</p>
        <p>Modelo: {modelo}</p>
        <p>Detalle: {detalles}</p>
        <p>Precio: {precio}</p>
      </div>
    </div>
  );
};

export default Article;
