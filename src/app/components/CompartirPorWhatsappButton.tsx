import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { cx } from "@/app/utils/styles";
import Tooltip from "./Tooltip";

type CompartirPorWhatsAppButtonProps = {
  className?: string;
  message: string;
  buttonVersion?: "expanded" | "compact";
};

const CompartirPorWhatsAppButton = ({
  className,
  message,
  buttonVersion = "expanded",
}: CompartirPorWhatsAppButtonProps): JSX.Element => {
  const handleClick = () => {
    const url = `https://wa.me/?text=${message}: ${window.location}`;
    window.open(url, "_blank");
  };
  if (buttonVersion === "compact") {
    return (
      <Tooltip message="Compartir por Whatsapp">
        <button
          rel="noopener noreferrer"
          className={cx(
            `flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-black bg-orange-500 p-3 text-white transition-all duration-200 hover:scale-125 hover:bg-orange-600 lg:p-6 lg:text-base`,
            className,
          )}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faShare} size="xl" />
        </button>
      </Tooltip>
    );
  }
  return (
    <Tooltip message="Compartir por Whatsapp">
      <button
        rel="noopener noreferrer"
        className={cx(
          `flex w-40 cursor-pointer items-center justify-center rounded-full border border-black bg-orange-500 px-2 py-3 text-sm font-bold text-white transition-all duration-200 hover:scale-125 hover:bg-orange-600 lg:px-6 lg:py-4 lg:text-base`,
          className,
        )}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faShare} size="xl" className="mr-2" />
        <p>Compartir</p>
      </button>
    </Tooltip>
  );
};

export default CompartirPorWhatsAppButton;
