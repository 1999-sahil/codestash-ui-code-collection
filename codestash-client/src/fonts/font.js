{
  /*
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Mukta:wght@200;300;400;500;600;700;800&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Ubuntu+Condensed&display=swap'); 
  */
}

{
  /**
  fontFamily: {
          ubuntu: ["Ubuntu Condensed", "serif"],
          raleway: ["Raleway", "serif"],
          poppins: ["Poppins", "serif"],
          openSans: ["Open Sans", "serif"],
          mukta: ["Mukta", "serif"],
          kanit: ["Kanit", "serif"],
          inter: ["Inter", "serif"],
        },    
  */
}


{/** dashboard */}
{/*
import React, { useEffect, useState } from "react";
import axios from "axios";

import { getBaseUrl } from "../utils/baseURL";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";

import Loading from "../components/loading";
import Sidebar from "../components/dashboard/sidebar";
import DashboardPanel from "../components/dashboard/panel";

function Dashboard() {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState({});
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

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
    <div
      className={`bg-zinc-100 dark:bg-black grid gap-2 p-2 ${
        isSidebarExpanded
          ? "grid-cols-[220px,_1fr]" // Expanded width
          : "grid-cols-[1fr]" // Default width
      }`}
    >
      {isSidebarExpanded && (
        <Sidebar
          isExpanded={isSidebarExpanded}
          onToggle={() => setIsSidebarExpanded(!isSidebarExpanded)}
        />
      )}
      <DashboardPanel isExpanded={isSidebarExpanded} onSidebarToggle={() => setIsSidebarExpanded(true)} />

      {/* Sidebar toggle button when collapsed */}
      {/*
      {!isSidebarExpanded && (
        <button
          onClick={() => setIsSidebarExpanded(true)}
          className="fixed top-4 left-3 z-50 p-1"
        >
          <TbLayoutSidebarLeftExpandFilled className="text-2xl text-zinc-500 dark:text-zinc-400" />
        </button>
      )}
        */}
*/}