"use client";

import ArticleNav from "@/app/components/ArticleNav";
import ReturnButton from "@/app/components/ReturnButton";

import { defaultImage } from "@/app/constants";
import { Article as ArticleData } from "@/app/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "@/app/components/Loading";

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
    return <Loading />;
  }
  const {
    titulo,
    marca,
    modelo,
    detalle,
    precio,
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    vendido,
    pausado,
  } = articleData;

  const arrayOfImages = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6];

  if (vendido || pausado) {
    return (
      <main className="min-h-svh w-screen p-4 md:h-[100svh]">
        <div className="flex h-full items-center justify-center rounded-sm border border-black bg-white">
          <ReturnButton className="fixed left-2 top-2 z-50" />
          <h1 className="py-3 text-center text-2xl text-red-600 md:text-4xl">
            Artículo no disponible
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="flex w-full flex-col justify-center p-4">
      <div className="flex flex-col rounded-sm border border-black bg-slate-100">
        <ReturnButton className="fixed left-2 top-2 z-50" />
        <h1 className="ocean_gradient px-4 pb-8 pt-10 text-center text-2xl font-bold md:py-6 md:text-4xl">
          {titulo || ""}
        </h1>
        <div className="relative flex w-full flex-wrap justify-evenly gap-4 px-10">
          {!arrayOfImages[0] ? (
            <Image
              height={300}
              width={300}
              src={defaultImage}
              alt={"Default image"}
            />
          ) : (
            arrayOfImages.map((imagen, index) => {
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
            })
          )}
        </div>

        <div className="w-full px-6 py-6">
          {marca === "" ? null : (
            <p className="py-2">
              <span className="underline underline-offset-2 lg:text-lg">
                Marca:{" "}
              </span>
              <span className="lg:text-lg">{marca}</span>
            </p>
          )}
          {modelo === "" ? null : (
            <p className="py-2">
              <span className="underline underline-offset-2 lg:text-lg">
                Modelo:{" "}
              </span>
              <span className="lg:text-lg">{modelo}</span>
            </p>
          )}
          {detalle === "" ? null : (
            <p className="py-2">
              <span className="underline underline-offset-2 lg:text-lg">
                Detalle:{" "}
              </span>
              <span className="lg:text-lg">{detalle}</span>
            </p>
          )}
          <p className="py-2">
            <span className="underline underline-offset-2 lg:text-lg">
              Precio:{" "}
            </span>
            <span className="lg:text-lg">{precio}</span>
          </p>
        </div>
      </div>
      <ArticleNav title={titulo} />
    </main>
  );
};

export default Article;
