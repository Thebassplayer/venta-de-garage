import React from "react";
import InfoButton from "./InfoButton";
import WhatsAppButton from "./WhatsAppButton";
import CompartirPorWhatsAppButton from "./CompartirPorWhatsappButton";
import { cx } from "../utils/styles";

type MainNavProps = {
  whatsappMessage: string;
  whattsappShareMessage: string;
  className?: string;
};

const MainNav = ({
  whatsappMessage,
  whattsappShareMessage,
  className,
}: MainNavProps) => {
  return (
    <nav
      className={cx(
        "mx-auto flex max-w-min items-center justify-center gap-4 rounded-full p-2 backdrop-blur-sm",
        className,
      )}
    >
      <InfoButton />
      <WhatsAppButton
        buttonVersion="compact"
        phoneNumber="541133449591"
        message={`${whatsappMessage}`}
      />
      <CompartirPorWhatsAppButton
        buttonVersion="compact"
        message={whattsappShareMessage}
      />
    </nav>
  );
};

export default MainNav;
