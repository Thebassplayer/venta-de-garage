import { cx } from "@/app/utils/styles";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Tooltip from "./Tooltip";

type InfoButtonProps = {
  className?: string;
};

const InfoButton = ({ className }: InfoButtonProps) => {
  return (
    <Tooltip message="Mas info!">
      <Link
        href="?modal=true"
        className={cx(
          `flex h-14 w-14 items-center justify-center rounded-full border border-black bg-blue-500 p-3 text-white transition-all  duration-200 hover:scale-125 hover:bg-blue-600 lg:p-6 lg:text-base`,
          className,
        )}
      >
        <FontAwesomeIcon icon={faInfo} size="lg" />
      </Link>
    </Tooltip>
  );
};

export default InfoButton;
