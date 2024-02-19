import React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

type ReturnButtonProps = {
  className?: string;
};

const ReturnButton = ({ className }: ReturnButtonProps) => {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <button
      className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-black bg-slate-200 ${className}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};

export default ReturnButton;
