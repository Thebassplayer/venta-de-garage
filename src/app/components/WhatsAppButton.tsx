import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = (): JSX.Element => {
  return (
    <a
      href="https://wa.me/+5491133449591" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center rounded-full bg-green-500 px-6 py-4 font-bold text-white transition-colors duration-300 hover:bg-green-600 w-40"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="xl" className="mr-2" />
      <p>Whatsapp</p>
    </a>
  );
};

export default WhatsAppButton;
