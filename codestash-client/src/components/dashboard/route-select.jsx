import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { dashboardComponents } from "../../constants/dashboard-components";

import { FiHome } from "react-icons/fi";
import { MdDashboard, MdAnalytics } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";

function RouteSelect() {
  const location = useLocation();
  const [selectedRoute, setSelectedRoute] = useState(location.pathname);

  const handleRouteClick = (route) => {
    setSelectedRoute(route);
  };

  return (
    <div className="space-y-1">
      <div className="gap-1 flex flex-col">
        <Route
          href="/dashboard"
          title="Dashboard"
          icon={FiHome}
          selected={selectedRoute === "/dashboard"}
          onClick={() => handleRouteClick("/dashboard")}
        />
        <Route
          href="/dashboard/components"
          title="Components"
          icon={MdDashboard}
          selected={selectedRoute === "/dashboard/components"}
          onClick={() => handleRouteClick("/dashboard/components")}
        />
      </div>
      
      {/* Render dynamic component links */}
      <div className="overflow-y-scroll overflow-x-hidden h-[50vh] space-y-3 mb-4 scrollbar-dashboard">
        {dashboardComponents.map((component, i) => (
          <Components
            href={component.href}
            title={component.title}
            key={i}
            selected={selectedRoute === component.href}
            onClick={() => handleRouteClick(component.href)}
          />
        ))}
      </div>

      {/* Other static routes */}
      <div className="flex flex-col gap-1">
        <Route
          href="/dashboard/analytics"
          title="Analytics"
          icon={MdAnalytics}
          selected={selectedRoute === "/dashboard/analytics"}
          onClick={() => handleRouteClick("/dashboard/analytics")}
        />
        <Route
          href="/dashboard/notifications"
          title="Notifications"
          icon={IoNotifications}
          selected={selectedRoute === "/dashboard/notifications"}
          onClick={() => handleRouteClick("/dashboard/notifications")}
        />
        <Route
          href="/dashboard/settings"
          title="Settings"
          icon={AiFillSetting}
          selected={selectedRoute === "/dashboard/settings"}
          onClick={() => handleRouteClick("/dashboard/settings")}
        />
      </div>
    </div>
  );
}

const Route = ({ href, selected, icon: Icon, title, onClick }) => {
  return (
    <Link to={href} onClick={onClick}>
      <button
        className={`flex items-center justify-start gap-2 font-inter w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color]
        ${
          selected
            ? "bg-white dark:bg-[#111] text-stone-950 dark:text-white shadow dark:shadow-stone-900 font-medium"
            : "bg-transparent text-zinc-800 dark:text-stone-300 shadow-none hover:bg-stone-200 dark:hover:bg-zinc-950"
        }`}
      >
        <Icon />
        <span>{title}</span>
      </button>
    </Link>
  );
};

const Components = ({ title, href, selected, onClick }) => {
  return (
    <Link to={href} onClick={onClick}>
      <button
        className={`text-sm font-openSans w-full text-start ml-8 py-1 hover:underline 
        ${
          selected
            ? "text-zinc-900 dark:text-white font-semibold underline"
            : "text-zinc-900 dark:text-zinc-300"
        }`}
      >
        {title}
      </button>
    </Link>
  );
};

export default RouteSelect;
