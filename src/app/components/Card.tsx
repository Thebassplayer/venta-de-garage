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
      <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50/50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          {detail}
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src={firstImage}
            height="1000"
            width="1000"
            className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-20 flex items-center justify-between">
          <CardItem
            translateZ={20}
            as="button"
            className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
          >
            {price}
          </CardItem>
          <Link href={`${baseURL}article/${slug}`}>
            <CardItem
              translateZ={20}
              as="button"
              className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
            >
              + Info
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
