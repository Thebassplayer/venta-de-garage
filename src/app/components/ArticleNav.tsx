import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import CompartirPorWhatsAppButton from "./CompartirPorWhatsappButton";
import { whattsappButtontMessage, whattsappShareMessage } from "../constants";
import InfoButton from "./InfoButton";

type NavProps = {
  title: string;
};

const ArticleNav = ({ title }: NavProps) => {
  const titulo = title;
  return (
    <nav className="fixed bottom-4 right-4 z-50 flex gap-4 md:bottom-0 md:right-0">
      <InfoButton />
      <WhatsAppButton
        className="md:hidden"
        buttonVersion="compact"
        phoneNumber="541133449591"
        message={`${whattsappButtontMessage} ${titulo}`}
      />
      <CompartirPorWhatsAppButton
        className="md:hidden"
        buttonVersion="compact"
        message={whattsappShareMessage}
      />
    </nav>
  );
};

export default ArticleNav;
