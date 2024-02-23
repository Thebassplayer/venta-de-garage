import React from "react";
import InfoButton from "./InfoButton";
import WhatsAppButton from "./WhatsAppButton";
import CompartirPorWhatsAppButton from "./CompartirPorWhatsappButton";

type MainNavProps = {
  whatsappMessage: string;
  whattsappShareMessage: string;
};

const MainNav = ({ whatsappMessage, whattsappShareMessage }: MainNavProps) => {
  return (
    <nav className="fixed bottom-4 right-4 z-50 flex gap-4 md:bottom-10 md:right-1/2 md:translate-x-1/2">
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
