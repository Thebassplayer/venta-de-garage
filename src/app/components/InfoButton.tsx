import { cx } from "@/app/utils/styles";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type InfoButtonProps = {
  className?: string;
};

const InfoButton = ({ className }: InfoButtonProps) => {
  return (
    <Link
      href="?modal=true"
      className={cx(
        `flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 p-3 text-white transition-colors duration-300  hover:bg-blue-600 lg:p-6 lg:text-base`,
        className,
      )}
    >
      <FontAwesomeIcon icon={faInfo} size="lg" />
    </Link>
  );
};

export default InfoButton;
