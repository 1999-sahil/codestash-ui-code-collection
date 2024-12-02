import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const AccountToggle = () => {
  return (
    <div className="flex flex-col sticky gap-4 h-10 top-[calc(100vh_-_48px_-_0px)] border-t border-zinc-200 dark:border-zinc-900 py-2 mt-3 mb-2">
      <button className="flex p-1 hover:bg-zinc-200 dark:hover:bg-zinc-900 rounded transition-colors relative gap-2 w-full items-center">
        <img
          src="https://api.dicebear.com/9.x/notionists/svg"
          alt="avatar"
          className="size-8 rounded shrink-0 bg-violet-500 shadow"
        />
        <div className="text-start text-xs">
          <span className="font-medium block font-inter text-[#111] dark:text-zinc-100">Sahil Ahmed</span>
          <span className="font-mukta block text-zinc-500 dark:text-zinc-400">sahilahmed466@gmail.com</span>
        </div>

        <FiChevronDown className="absolute right-1 top-1/2 translate-y-[calc(-50%+4px)] text-xs dark:text-zinc-100" />
        <FiChevronUp className="absolute right-1 top-1/2 translate-y-[calc(-50%-4px)] text-xs dark:text-zinc-100" />
      </button>
    </div>
  );
};