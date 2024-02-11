import Image from "next/image";
import React from "react";
import { Article } from "../types";
import { CldImage } from "next-cloudinary";

export type CardProps = {
  article: Article;
};

const defaultImage = "venta_garage/e9f01hh4kutrdbsen9bs";

const Card = (article: CardProps) => {
  const firstImage = article.article.imagen1
    ? article.article.imagen1
    : defaultImage;

  return (
    <a href="#" className="block dark:bg-white p-4 rounded-sm">
      <div className="h-64 w-full object-cover sm:h-80 lg:h-96 relative">
        <CldImage fill src={firstImage} alt={"artwork.alt"} crop="fill" />
      </div>

      <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
        {article.article.titulo}
      </h3>

      <p className="mt-2 max-w-sm text-gray-700">{article.article.detalles}</p>
    </a>
  );
};

export default Card;
