import React from "react";
import { GithubIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="flex w-full flex-row items-center justify-center gap-4 bg-black p-3">
      <span className="text-sm  text-white dark:bg-white dark:text-black">
        R3 - 2024 - Todos los derechos reservados
      </span>
      <a
        href={"https://github.com/Thebassplayer/venta-de-garage"}
        className={`ease mr-4 inline-block h-6 w-6 fill-white transition-transform duration-200 hover:scale-125
            `}
      >
        {<GithubIcon />}
      </a>
    </footer>
  );
};

export default Footer;
