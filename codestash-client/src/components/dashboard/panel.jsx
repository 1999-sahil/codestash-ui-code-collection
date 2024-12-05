import React from "react";

import Topbar from "./topbar";
import AdminIntro from "./admin-intro";
import { users } from "../../constants/users";

import waveLight from "../../assets/dashboard/wave-light.svg";
//import waveDark from '../../assets/dashboard/wave-dark.svg'

import { MdOutlineCandlestickChart, MdRefresh } from "react-icons/md";
import { FaArrowUp, FaSearch } from "react-icons/fa";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { BiNetworkChart } from "react-icons/bi";
import { TiChartAreaOutline, TiChartBarOutline } from "react-icons/ti";
import { GoArrowUpRight } from "react-icons/go";
import { LuComponent } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { GrCube } from "react-icons/gr";

function DashboardPanel({ isExpanded, onSidebarToggle }) {
  return (
    <div className="bg-white dark:bg-[#0f0f0f] overflow-x-hidden shadow rounded-md border border-zinc-200/50 dark:border-zinc-900 h-full px-1 lg:px-2">
      <Topbar isExpanded={isExpanded} />
      <AdminIntro />

      {/** Components */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-4">
        {/** total components */}
        <div className="border border-zinc-200 dark:border-zinc-900 rounded-md p-3 space-y-4">
          <h2 className="text-[#333] dark:text-zinc-300 font-poppins font-medium">
            Total Components
          </h2>
          <div className="flex items-center justify-between">
            <span className="font-semibold font-inter text-xl text-black dark:text-white">
              765
            </span>
            <div className="flex items-center gap-2 text-xs font-poppins font-medium">
              <span className="flex items-center gap-1 text-green-600">
                <FaArrowUp className="bg-green-200 dark:bg-green-900 rounded-full p-1 text-xl" />
                15%
              </span>
              <span className="flex items-center gap-1 text-red-600">
                <FaArrowDown className="bg-red-200 dark:bg-red-900 rounded-full p-1 text-xl" />
                8.2%
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm font-mukta">
            <h2 className="text-zinc-800 dark:text-zinc-400">Manage</h2>
            <FaArrowRight className="rounded-full text-xl p-1 bg-zinc-200 dark:bg-zinc-800 text-[#333] dark:text-zinc-400" />
          </div>
        </div>

        {/** top components */}
        <div className="border border-zinc-200 dark:border-zinc-900 rounded-md p-3 space-y-4">
          <h2 className="text-[#333] dark:text-zinc-300 font-poppins font-medium">
            Top Components
          </h2>
          <div className="flex items-center justify-between">
            <span className="font-semibold font-inter text-xl text-black dark:text-white">
              65
            </span>
            <LuComponent className="rounded-md bg-orange-200/50 dark:bg-orange-900 text-2xl text-orange-500 p-1" />
          </div>
          <div className="flex items-center justify-between text-sm font-mukta">
            <h2 className="text-zinc-800 dark:text-zinc-400">Manage</h2>
            <FaArrowRight className="rounded-full text-xl p-1 bg-zinc-200 dark:bg-zinc-800 text-[#333] dark:text-zinc-400" />
          </div>
        </div>

        {/** total users */}
        <div className="border border-zinc-200 dark:border-zinc-900 rounded-md p-3 space-y-4">
          <h2 className="text-[#333] dark:text-zinc-300 font-poppins font-medium">
            Total Users
          </h2>
          <div className="flex items-center justify-between">
            <span className="font-semibold font-inter text-xl text-black dark:text-white">
              32K
            </span>
            <FiUser className="rounded-md bg-purple-200/50 dark:bg-purple-900 text-2xl text-purple-500 p-1" />
          </div>
          <div className="flex items-center justify-between text-sm font-mukta">
            <h2 className="text-zinc-800 dark:text-zinc-400">Manage</h2>
            <FaArrowRight className="rounded-full text-xl p-1 bg-zinc-200 dark:bg-zinc-800 text-[#333] dark:text-zinc-400" />
          </div>
        </div>

        {/** impressions */}
        <div className="border border-zinc-200 dark:border-zinc-900 rounded-md p-3 space-y-4">
          <h2 className="text-[#333] dark:text-zinc-300 font-poppins font-medium">
            Impressions
          </h2>
          <div className="flex items-center justify-between">
            <span className="font-semibold font-inter text-xl text-black dark:text-white">
              420K
            </span>
            <span className="flex items-center gap-1 text-xs font-poppins font-medium text-red-500">
              <FaArrowUp className="rounded-full p-1 text-xl bg-red-200 dark:bg-red-900" />
              18.3%
            </span>
          </div>
          <div className="flex items-center justify-between text-sm font-mukta">
            <h2 className="text-zinc-800 dark:text-zinc-400">Manage</h2>
            <FaArrowRight className="rounded-full text-xl p-1 bg-zinc-200 dark:bg-zinc-800 text-[#333] dark:text-zinc-400" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 mb-4">
        {/** Chart Data */}
        <div className="w-full lg:w-[75%] border border-zinc-200 dark:border-zinc-900 rounded-md px-4 py-4 space-y-6">
          <div className="flex items-start justify-between">
            <h2 className="font-medium font-inter text-2xl text-[#333] dark:text-zinc-300">
              Indicators
            </h2>
            <BiNetworkChart className="rounded-full p-1 text-3xl text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs font-mukta font-medium">
              <span className="text-zinc-500">Daily</span>
              <span className="text-zinc-500">Monthly</span>
              <span className="text-green-500">Yearly</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <MdOutlineCandlestickChart />
              <TiChartAreaOutline className="text-green-500" />
              <TiChartBarOutline />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={waveLight} alt="" className="" />
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-raleway text-zinc-500 dark:text-zinc-400">
              Your total components
            </h2>
            <div className="flex items-center justify-between">
              <span className="text-2xl text-[#333] dark:text-zinc-100 font-poppins font-semibold">
                765
              </span>
              <h2 className="flex items-center gap-2 font-normal font-openSans text-zinc-500">
                +5.7%
                <span className="rounded-full bg-green-200 dark:bg-green-900 text-green-500 p-[2px]">
                  <GoArrowUpRight />
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/** recent users */}
        <div className="w-full lg:w-[25%] border border-zinc-200 dark:border-zinc-900 rounded-md px-4 py-4 space-y-6">
          <h2 className="font-medium font-poppins text-[#333] dark:text-zinc-200">
            Recent users
          </h2>
            {
              users.map((user, i) => {
                return (
                  <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 lg:gap-1">
              <img
                src={user.src}
                alt="avatar"
                className={`size-6 rounded shrink-0 shadow`}
                style={{ backgroundColor: user.color }}
              />
              <span className="font-medium font-inter">
                <h3 className="text-xs text-[#333] dark:text-zinc-100">
                  {user.name}
                </h3>
                <h4 className="text-[8px] text-zinc-500">
                  {user.email}
                </h4>
              </span>
            </div>
            <span className="bg-zinc-800 text-white dark:bg-zinc-200 dark:text-black rounded-md text-xs font-mukta font-medium px-2 py-1">
              Manage
            </span>
                </div>
                )
              })
            }
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 mb-2">
        {/** upgrade plan */}
        <div className="w-full lg:w-[25%] border border-zinc-200 dark:border-zinc-900 rounded-md px-4 py-4 space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h3 className="text-xs font-kanit text-zinc-600 dark:text-zinc-300">
                UPGRADE
              </h3>
              <h2 className="text-lg font-poppins font-medium text-black dark:text-white">
                Premium Plan
              </h2>
            </div>
            <button className="bg-zinc-800 text-white dark:bg-zinc-200 dark:text-black rounded-md px-2 py-1 text-sm font-mukta font-medium">
              Upgrade
            </button>
          </div>
          <h2 className="text-[10px] font-normal font-mukta text-zinc-500 text-start whitespace-wrap">
            Supercharge your dashboard management and unlock your full potential
            for extra ordinary success.
          </h2>
        </div>
        <div className="w-full lg:w-[75%] border border-zinc-200 dark:border-zinc-900 rounded-md px-4 py-4 space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-medium font-poppins text-[#333] dark:text-zinc-200">
              Components List
            </h2>
            <GrCube className="border border-zinc-200 dark:border-zinc-800 rounded-md p-1 text-2xl text-[#333] dark:text-zinc-400" />
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-black dark:text-white font-poppins font-semibold text-xl">
              390
            </h2>
            <span className="text-xs text-green-500 bg-green-200 dark:bg-green-900 rounded-lg p-[2px]">
              +12%
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="search component"
                className="border border-zinc-100 dark:border-zinc-900/50 text-zinc-600 dark:text-zinc-300 outline-none rounded pl-6 py-1 text-xs bg-white dark:bg-zinc-900"
              />
              <FaSearch className="absolute top-2 left-2 text-black dark:text-white text-xs" />
            </div>
            <button className="flex items-center gap-1 bg-zinc-800 dark:bg-zinc-200 dark:text-black text-white rounded-md text-sm font-mukta px-2 py-1">
              <MdRefresh />
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPanel;
