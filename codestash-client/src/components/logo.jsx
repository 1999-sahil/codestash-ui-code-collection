import React from "react";
import logoLight from "../assets/logo/logo-light.png";
import logoDark from "../assets/logo/logo-dark.png";
import { useTheme } from "./theme-provider";

function Logo() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center gap-1 w-fit cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900 p-2 rounded-md">
        <img
          src={theme === "dark" ? logoDark : logoLight}
          alt="codestash-ui-logo"
          className="w-5 h-5 lg:w-6 lg:h-6"
        />
        <h2 className="flex items-center font-poppins text-sm font-bold text-neutral-900 dark:text-white">
            code
            <span className="text-neutral-600 dark:text-neutral-200">stash</span>
            /ui
        </h2>
    </div>
  )
}

export default Logo