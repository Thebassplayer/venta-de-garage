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
      className="rounded-full border border-black w-10 h-10 flex justify-center items-center absolute top-2 left-2 bg-ocean_gradient"
      onClick={handleClick}
    >
      <div className="text-xl">🏠</div>
    </button>
  );
};

export default HomeButton;
