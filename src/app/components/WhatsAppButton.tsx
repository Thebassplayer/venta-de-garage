"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { cx } from "@/app/utils/styles";
import Tooltip from "./Tooltip";

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
      <Tooltip message="Consultas por Whatsapp">
        <button
          rel="noopener noreferrer"
          className={cx(
            `flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-black bg-green-500 p-3 text-white transition-all duration-200 hover:scale-125 hover:bg-green-600 lg:p-6 lg:text-base`,
            className,
          )}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faWhatsapp} size="xl" />
        </button>
      </Tooltip>
    );
  }
  return (
    <Tooltip message="Consultas por Whatsapp">
      <button
        rel="noopener noreferrer"
        className={cx(
          `flex w-40 cursor-pointer items-center justify-center rounded-full border
       border-black bg-green-500 px-2 py-3 text-sm font-bold text-white transition-all duration-200 hover:scale-125 hover:bg-green-600 lg:px-6 lg:py-4 lg:text-base`,
          className,
        )}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="xl" className="mr-2" />
        <p>Whatsapp</p>
      </button>
    </Tooltip>
  );
};

export default WhatsAppButton;
