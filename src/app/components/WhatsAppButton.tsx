import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export type WhatsAppButtonProps = {
  phoneNumber: string;
  message: string;
  className?: string;
};

const WhatsAppButton = ({
  phoneNumber,
  message,
  className,
}: WhatsAppButtonProps): JSX.Element => {
  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <button
      rel="noopener noreferrer"
      className={`flex items-center justify-center rounded-full bg-green-500 px-3 lg:px-6 py-4 lg:py-4 font-bold text-white transition-colors duration-300 hover:bg-green-600 w-40 ${className}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faWhatsapp} size="xl" className="mr-2" />
      <p>Whatsapp</p>
    </button>
  );
};

export default WhatsAppButton;
