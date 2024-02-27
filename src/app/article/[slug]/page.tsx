import ArticleNav from "@/app/components/ArticleNav";
import ReturnButton from "@/app/components/ReturnButton";
import { defaultImage } from "@/app/constants";
import { Article as ArticleData } from "@/app/types";
import Image from "next/image";
import ArticleDetails from "../components/ArticleDetails";
import { notFound } from "next/navigation";

const localUrl = process.env.LOCAL_URL;
const articleApi = process.env.ARTICLE_ENDPOINT;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const articleTitle = (slug: string) => {
    // Remove hifen and capitalize first letter
    const articleTitle = slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l: string) => l.toUpperCase());

    return `Venta de Garage | ${articleTitle}`;
  };

  return {
    title: articleTitle(slug),
  };
}

async function getData(slug: string): Promise<ArticleData> {
  const res = await fetch(`${localUrl}${articleApi}${slug}`);

  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const article: ArticleData = await getData(slug);

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
  } = article;

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
    <main className="relative flex h-full w-full grow flex-col justify-between p-4">
      <div className="flex flex-col rounded-sm border border-black bg-slate-100/70">
        <ReturnButton className="fixed left-2 top-2 z-50" />
        <h1 className="px-4 pb-8 pt-10 text-center text-2xl font-bold md:py-6 md:text-4xl">
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

        <ArticleDetails
          marca={marca}
          modelo={modelo}
          detalle={detalle}
          precio={precio}
        />
      </div>
      <ArticleNav title={titulo} className="sticky bottom-4 z-50" />
    </main>
  );
}
