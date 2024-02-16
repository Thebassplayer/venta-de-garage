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
      className="border border-black block dark:bg-white p-4 rounded-sm bg-slate-100 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:ring-orange-500 hover:ring-4 hover:shadow-xl active:ring-violet-600"
    >
      <div className="h-[300px] relative flex justify-center">
        <CldImage
          height={300}
          width={350}
          src={firstImage}
          alt={title}
          crop="fill_pad"
        />
      </div>
      <div className="flex mt-4 justify-between">
        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{title}</h3>
        <p className="text-lg font-bold text-gray-900 sm:text-xl">{price}</p>
      </div>

      <p className="mt-2 max-w-sm text-gray-700">{detail}</p>
    </a>
  );
};

export default Card;
