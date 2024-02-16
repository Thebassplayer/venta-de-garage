import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

const CompartirPorWhatsAppButton = (): JSX.Element => {
  const handleClick = () => {
    const url =
      "https://wa.me/?text=Check%20out%20this%20page%20%20https%3A%2F%2Fexample.com";
    window.open(url, "_blank");
  };
  return (
    <button
      rel="noopener noreferrer"
      className="flex items-center justify-center rounded-full bg-orange-500 px-6 py-4 font-bold text-white transition-colors duration-300 hover:bg-orange-600 w-40"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faShare} size="xl" className="mr-2" />
      <p>Compartir</p>
    </button>
  );
};

export default CompartirPorWhatsAppButton;

// href="https://wa.me/?text=Check%20out%20this%20page%20%20https%3A%2F%2Fexample.com"