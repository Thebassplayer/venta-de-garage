import Image from "next/image";
import React from "react";
import { Article } from "../types";
import { CldImage } from "next-cloudinary";
import { defaultImage } from "../constants";

export type CardProps = {
  article: Article;
};

const Card = ({ article }: CardProps) => {
  const firstImage = article.imagen1 ? article.imagen1 : defaultImage;
  const title = article.titulo ? article.titulo : "Artículo sin título";
  const price = article.precio ? article.precio : "Precio no disponible";
  const detail = article.detalles
    ? article.detalles
    : "Detalles no disponibles";
  const slug = article.slug ? article.slug : "#";

  return (
    <a
      href={`/article/${slug}`}
      className="block rounded-sm border border-black bg-slate-100 p-4 shadow-sm transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl hover:ring-4 hover:ring-orange-500 active:ring-violet-600 dark:bg-white"
    >
      <div className="relative flex h-[300px] justify-center">
        <Image height={300} width={300} src={firstImage} alt={title} />
      </div>
      <div className="mt-4 flex justify-between">
        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{title}</h3>
        <p className="text-lg font-bold text-gray-900 sm:text-xl">{price}</p>
      </div>

      <p className="mt-2 max-w-sm text-gray-700">{detail}</p>
    </a>
  );
};

export default Card;
