export type ArticleProps = {
  titulo: string | null | undefined;
  marca: string | null | undefined;
  modelo: string | null | undefined;
  detalles: string | null | undefined;
  precio: string | null | undefined;
  imagenes: string | string[] | null | undefined;
  id?: string | null | undefined;
  slug?: string | null | undefined;
  comentarios: string | null | undefined;
  linkMercadoLibre?: string | null | undefined;
  linkFacebook?: string | null | undefined;
  vendido?: boolean | null | undefined;
  valorNuevo?: string | null | undefined;
};

const Article = () => {
  return <div>Article</div>;
};

export default Article;
