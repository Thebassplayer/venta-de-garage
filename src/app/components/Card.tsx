import Image from "next/image";
import React from "react";
import { Article } from "../types";
import { defaultImage } from "../constants";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/Card3D";

const baseURL = process.env.LOCAL_URL;

export type CardProps = {
  article: Article;
};

const Card = ({ article }: CardProps) => {
  const firstImage = article.imagen1 ? article.imagen1 : defaultImage;
  const title = article.titulo ? article.titulo : "Artículo sin título";
  const price = article.precio ? article.precio : "Precio no disponible";
  const detail = article.detalle ? article.detalle : "Detalles no disponibles";
  const slug = article.slug ? article.slug : "#";

  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50/50 p-8 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-black md:text-3xl"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="70"
          className="w.full mt-2 line-clamp-4 h-[6rem] text-sm text-neutral-800 dark:text-neutral-300 md:text-base"
        >
          {detail}
        </CardItem>
        <CardItem translateZ="130" className="mt-4 w-full">
          <Image
            src={firstImage}
            height="1000"
            width="1000"
            className="w-100 mx-auto h-full rounded-xl object-cover"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-16 flex items-center justify-between">
          <CardItem
            translateZ="50"
            as="button"
            className="rounded-xl px-4 py-2 text-xs font-bold dark:text-white md:text-3xl"
          >
            {price}
          </CardItem>
          <CardItem
            translateZ="50"
            as="button"
            className="rounded-xl bg-black px-6 py-3 text-xs font-bold text-white shadow-lg hover:shadow-black dark:bg-white dark:text-black md:text-base"
          >
            <Link href={`${baseURL}article/${slug}`}>+ Info</Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
