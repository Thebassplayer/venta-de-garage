import React from "react";
import { useRouter } from "next/navigation";

type HomeButtonProps = {
  className?: string;
};

const HomeButton = ({ className }: HomeButtonProps) => {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <button
      className={`flex h-12 w-12 items-center justify-center rounded-full border border-black bg-slate-200 ${className}`}
      onClick={handleClick}
    >
      <div className="text-xl">🏠</div>
    </button>
  );
};

export default HomeButton;
