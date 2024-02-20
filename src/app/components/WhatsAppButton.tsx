import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { cx } from "@/utils";

export type WhatsAppButtonProps = {
  phoneNumber: string;
  message: string;
  className?: string;
  buttonVersion?: "expanded" | "compact";
};

const WhatsAppButton = ({
  phoneNumber,
  message,
  className,
  buttonVersion = "expanded",
}: WhatsAppButtonProps): JSX.Element => {
  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  };
  if (buttonVersion === "compact") {
    return (
      <button
        rel="noopener noreferrer"
        className={cx(
          `flex items-center justify-center rounded-full bg-green-500 p-3 text-white transition-colors duration-300 hover:bg-green-600 lg:p-6  lg:text-base`,
          className,
        )}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="xl" />
      </button>
    );
  }
  return (
    <button
      rel="noopener noreferrer"
      className={cx(
        `flex w-40 items-center justify-center rounded-full bg-green-500 px-2
       py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-green-600 lg:px-6 lg:py-4 lg:text-base`,
        className,
      )}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faWhatsapp} size="xl" className="mr-2" />
      <p>Whatsapp</p>
    </button>
  );
};

export default WhatsAppButton;
