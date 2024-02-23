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
    <nav className={cx("flex gap-4", className)}>
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
