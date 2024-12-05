import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

import { getBaseUrl } from "../utils/baseURL";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";

import Loading from "../components/loading";
import Sidebar from "../components/dashboard/sidebar";

function Dashboard() {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState({});
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // Sidebar starts collapsed on small devices

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${getBaseUrl()}/api/admin`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        setData(res.data);
        setloading(false);
      } catch (error) {
        console.log("Dashboard Error: ", error);
        setloading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="relative bg-zinc-100 dark:bg-black grid grid-cols-1 lg:grid-cols-[220px,_1fr]">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 bg-zinc-900 bg-opacity-50 ${
          isSidebarExpanded ? "block" : "hidden"
        } lg:hidden`}
        onClick={() => setIsSidebarExpanded(false)}
      />
      <div
        className={`fixed top-0 left-0 z-50 bg-zinc-100 dark:bg-black transition-transform transform ${
          isSidebarExpanded ? "translate-x-0" : "-translate-x-full"
        } w-64 h-full shadow-lg lg:static lg:translate-x-0`}
      >
        <Sidebar
          isExpanded={isSidebarExpanded}
          onToggle={() => setIsSidebarExpanded(!isSidebarExpanded)}
        />
      </div>

      {/* Main Dashboard Panel */}
      <div className="flex-1 h-fit pl-2 lg:pl-10 py-2 pr-2">
        <Outlet />
      </div>

      {/* Sidebar Toggle Button */}
      {!isSidebarExpanded && (
        <button
          onClick={() => setIsSidebarExpanded(true)}
          className="fixed top-4 left-3 z-50 p-1 lg:hidden"
        >
          <TbLayoutSidebarLeftExpandFilled className="text-xl text-zinc-500 dark:text-zinc-400" />
        </button>
      )}
    </div>
  );
}

export default Dashboard;
