import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

type CompartirPorWhatsAppButtonProps = {
  className?: string;
  buttonVersion?: "expanded" | "compact";
};

const CompartirPorWhatsAppButton = ({
  className,
  buttonVersion = "expanded",
}: CompartirPorWhatsAppButtonProps): JSX.Element => {
  const handleClick = () => {
    const url = `https://wa.me/?text=Te%20recomiendo%20este%20sitio%20%20${window.location}`;
    window.open(url, "_blank");
  };
  if (buttonVersion === "compact") {
    return (
      <button
        rel="noopener noreferrer"
        className={`flex items-center justify-center rounded-full bg-orange-500 p-3 text-white transition-colors duration-300 hover:bg-orange-600 lg:p-6  lg:text-base ${className}`}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faShare} size="xl" />
      </button>
    );
  }
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
