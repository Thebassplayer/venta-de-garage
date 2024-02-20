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
    <div className="fixed bottom-4 right-2 z-50 flex justify-between gap-4 px-4">
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
    </div>
  );
};

export default MainNav;
