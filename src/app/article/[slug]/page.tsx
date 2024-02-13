"use client";
import { useEffect } from "react";

const Article = ({ params }: { params: { slug: string } }): JSX.Element => {
  const { slug } = params;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/article/${slug}`);
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, [slug]);

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

export default Article;
