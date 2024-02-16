import React from "react";
import { useRouter } from "next/navigation";

const HomeButton = () => {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <button
      className="absolute left-2 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-black"
      onClick={handleClick}
    >
      <div className="text-xl">🏠</div>
    </button>
  );
};

export default HomeButton;
