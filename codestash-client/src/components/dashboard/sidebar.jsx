import React from "react";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";

import { AccountToggle } from "./account-toggle";
import Logo from "../logo";
import RouteSelect, { Route } from "./route-select";
import { FiHome } from "react-icons/fi";
import { MdAnalytics, MdDashboard } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";

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
          <div className="space-y-1 mb-1">
            <Route icon={FiHome} selected={true} title="Dashboard" />
            <Route icon={MdDashboard} selected={false} title="Components" />
          </div>
          <div className="overflow-y-scroll overflow-x-hidden h-[50vh] space-y-3 mb-4 scrollbar-dashboard">
            <RouteSelect />
          </div>
          <Route icon={MdAnalytics} selected={false} title="Analytics" />
          <Route
            icon={IoNotifications}
            selected={false}
            title="Notifications"
          />
          <Route icon={AiFillSetting} selected={false} title="Settings" />
        </div>
        <AccountToggle />
      </div>
    </div>
  );
}

export default Sidebar;
