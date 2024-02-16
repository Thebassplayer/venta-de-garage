import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

type CompartirPorWhatsAppButtonProps = {
  className?: string;
};

const CompartirPorWhatsAppButton = ({
  className,
}: CompartirPorWhatsAppButtonProps): JSX.Element => {
  const handleClick = () => {
    const url =
      "https://wa.me/?text=Check%20out%20this%20page%20%20https%3A%2F%2Fexample.com";
    window.open(url, "_blank");
  };
  return (
    <button
      rel="noopener noreferrer"
      className={`flex w-40 items-center justify-center rounded-full bg-orange-500 px-2 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-orange-600 lg:px-6 lg:py-4 lg:text-base ${className}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faShare} size="xl" className="mr-2" />
      <p>Compartir</p>
    </button>
  );
};

export default CompartirPorWhatsAppButton;

// href="https://wa.me/?text=Check%20out%20this%20page%20%20https%3A%2F%2Fexample.com"
