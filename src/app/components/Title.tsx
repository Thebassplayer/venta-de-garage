import { cx } from "../utils/styles";

type TitleProps = {
  className?: string;
};

const Title = ({ className }: TitleProps) => {
  return (
    <h1
      className={cx(
        "py-2 text-center font-anta text-3xl font-bold backdrop-blur-sm md:text-4xl",
        className,
      )}
    >
      Venta de Garage
    </h1>
  );
};

export default Title;
