type DetailsProps = {
  marca: string;
  modelo: string;
  detalle: string;
  precio: string;
};

const ArticleDetails = ({ marca, modelo, detalle, precio }: DetailsProps) => {
  return (
    <div className="m-12 rounded-sm border border-black p-6">
      {marca === "" ? null : (
        <p className="py-2">
          <span className="underline underline-offset-2 md:text-xl">Marca</span>
          <span className="md:text-xl">: </span>
          <span className="text-sm md:text-lg">{marca}</span>
        </p>
      )}
      {modelo === "" ? null : (
        <p className="py-2">
          <span className="underline underline-offset-2 md:text-xl">
            Modelo
          </span>
          <span className="md:text-xl">: </span>
          <span className="text-sm md:text-lg">{modelo}</span>
        </p>
      )}
      {detalle === "" ? null : (
        <p className="py-2">
          <span className="underline underline-offset-2 md:text-xl">
            Detalle
          </span>
          <span className="md:text-xl">: </span>
          <span className="text-sm md:text-lg">{detalle}</span>
        </p>
      )}
      <p className="py-2">
        <span className="text-xl font-bold md:text-2xl">{precio}</span>
      </p>
    </div>
  );
};

export default ArticleDetails;
