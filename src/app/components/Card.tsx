import Image from "next/image";
import React from "react";
import { Article } from "../types";
import { CldImage } from "next-cloudinary";

export type CardProps = {
  article: Article;
};

const defaultImage = "venta_garage/e9f01hh4kutrdbsen9bs";

const Card = ({ article }: CardProps) => {
  const firstImage = article.imagen1 ? article.imagen1 : defaultImage;
  const title = article.titulo ? article.titulo : "Artículo sin título";
  const price = article.precio ? article.precio : "Precio no disponible";
  const detail = article.detalles
    ? article.detalles
    : "Detalles no disponibles";
  const slug = article.slug ? article.slug : "#";

  return (
    <a href={`/article/${slug}`} className="block dark:bg-white p-4 rounded-sm">
      <div className="h-64 w-full object-cover sm:h-80 lg:h-96 relative">
        <CldImage fill src={firstImage} alt={"artwork.alt"} crop="fill" />
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
