import Image from "next/image";
import React from "react";
import { Article } from "../types";
import { defaultImage } from "../constants";
import Link from "next/link";
import { cx } from "../utils/styles";

export type CardProps = {
  article: Article;
  cardVersion?: "small" | "large";
};

const Card = ({ article, cardVersion = "small" }: CardProps) => {
  const firstImage = article.imagen1 ? article.imagen1 : defaultImage;
  const title = article.titulo ? article.titulo : "Artículo sin título";
  const price = article.precio ? article.precio : "Precio no disponible";
  const detail = article.detalle ? article.detalle : "Detalles no disponibles";
  const slug = article.slug ? article.slug : "#";

  return cardVersion === "small" ? (
    <Link
      href={`/article/${slug}`}
      className={cx(
        `flex cursor-pointer flex-row rounded-sm border border-black bg-slate-100/70 p-2 shadow-sm transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl hover:ring-4 hover:ring-orange-500 active:ring-violet-600`,
      )}
    >
      <div className="relative flex w-1/4 items-center justify-center">
        <Image height={100} width={100} src={firstImage} alt={title} />
      </div>
      <div className="my-auto ml-8 flex w-3/4 flex-col gap-4">
        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{title}</h3>
        <p className="text-gray-900 sm:text-xl">{price}</p>
      </div>
    </Link>
  ) : (
    <Link
      href={`/article/${slug}`}
      className={cx(
        `block cursor-pointer rounded-sm border border-black bg-slate-100/70 p-4 shadow-sm transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl hover:ring-4 hover:ring-orange-500 active:ring-violet-600`,
      )}
    >
      <div className="relative flex h-[300px] justify-center">
        <Image height={300} width={300} src={firstImage} alt={title} />
      </div>
      <div className="mt-4 flex justify-between">
        <h3 className="line-clamp-1 text-lg font-bold text-gray-900 sm:text-xl">
          {title}
        </h3>
        <p className="text-lg font-bold text-gray-900 sm:text-xl">{price}</p>
      </div>

      <p className="mt-2 line-clamp-4 max-w-sm text-gray-700">{detail}</p>
    </Link>
  );
};

export default Card;
