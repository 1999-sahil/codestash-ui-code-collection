import React from "react";

export const Plan = () => {
  return (<div className="flex items-center justify-between">
        <div className="font-openSans">
          <p className="font-bold text-[#111] dark:text-zinc-100">Enterprise</p>
          <p className="text-stone-500 dark:text-zinc-400">Pay as you go</p>
        </div>

        <button className="px-2 py-1.5 font-medium font-mukta text-white dark:text-black bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-200 dark:hover:bg-zinc-300 transition-colors rounded">
          Support
        </button>
      </div>
  );
};