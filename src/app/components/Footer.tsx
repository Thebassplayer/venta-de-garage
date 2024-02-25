"use client";
import React from "react";
import { GithubIcon } from "./Icons";
import useLastUpdate from "../hooks/useLastUpdate";

const Footer = () => {
  const { loading, error, lastUpdate } = useLastUpdate();

  return (
    <footer className="flex w-full flex-row items-center justify-center gap-4 bg-black p-3 text-xs text-white dark:bg-white dark:text-black md:text-sm">
      <span>R3 - 2024 - Todos los derechos reservados</span>
      <span>|</span>
      <a
        href={"https://github.com/Thebassplayer/venta-de-garage"}
        className={`ease inline-block h-6 w-6 cursor-pointer fill-white transition-transform duration-200 hover:scale-125
            `}
      >
        {<GithubIcon />}
      </a>
      <span>|</span>
      <span>
        {loading && "Cargando..."}
        {error && ""}
        {lastUpdate && `Última actualización: ${lastUpdate}`}
      </span>
    </footer>
  );
};

export default Footer;
