"use client";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { cx } from "@/app/utils/styles";

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
      className={cx(
        `flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black bg-slate-200 transition-all duration-200 hover:scale-125 hover:bg-slate-300`,
        className,
      )}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};

export default ReturnButton;
