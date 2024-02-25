import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import CompartirPorWhatsAppButton from "./CompartirPorWhatsappButton";
import { whattsappButtontMessage, whattsappShareMessage } from "../constants";
import InfoButton from "./InfoButton";
import { cx } from "../utils/styles";

type NavProps = {
  title: string;
  className?: string;
};

const ArticleNav = ({ title, className }: NavProps) => {
  const titulo = title;
  return (
    <nav
      className={cx(
        "mx-auto flex max-w-min items-center justify-center gap-4 rounded-full p-2 backdrop-blur-sm ",
        className,
      )}
    >
      <InfoButton />
      <WhatsAppButton
        buttonVersion="compact"
        phoneNumber="541133449591"
        message={`${whattsappButtontMessage} ${titulo}`}
      />
      <CompartirPorWhatsAppButton
        buttonVersion="compact"
        message={whattsappShareMessage}
      />
    </nav>
  );
};

export default ArticleNav;
