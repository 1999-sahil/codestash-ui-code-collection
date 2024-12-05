import React from "react";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";

import { AccountToggle } from "./account-toggle";
import Logo from "../logo";
import RouteSelect from "./route-select";

function Sidebar({ isExpanded, onToggle }) {
  return (
    <div className="sticky top-0 left-0">
      <div
        className={`fixed top-0 left-0 z-50 px-2 py-2 bg-zinc-100 dark:bg-black h-full w-64 transition-transform ${
          isExpanded ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        <div className="">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-900 pb-2 mb-4">
            <Logo />
            <div className="mr-1">
              <TbLayoutSidebarRightExpandFilled
                onClick={onToggle}
                className="text-xl text-stone-500 dark:text-stone-400 cursor-pointer"
              />
            </div>
          </div>
          <RouteSelect />
        </div>
        <AccountToggle />
      </div>
    </div>
  );
}

export default Sidebar;
