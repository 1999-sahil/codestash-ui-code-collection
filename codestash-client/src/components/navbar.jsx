import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logo from "./logo";
import Icon from "./icon";
import { useAuth } from "../context/auth-context";
import ThemeToggle from "./theme-toggle";

import { BiChevronDown, BiMenuAltRight } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { LuUser, LuLogOut } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    toast.success("You have been logged out successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="max-w-screen-2xl w-full mx-auto px-2 md:px-4 lg:px-6 py-2 border-b border-zinc-100 dark:border-neutral-800 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />

          {/** nav-links */}
          <div className="hidden md:flex items-center gap-5">
            <Link to="">
              <h2 className="text-sm font-inter font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white">
                Components
              </h2>
            </Link>
            <Link to="">
              <h2 className="text-sm font-inter font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white">
                Snippets
              </h2>
            </Link>
          </div>
        </div>

        {/** right side */}
        <div className="flex items-center gap-4">
          {/** buttons */}
          <div className="hidden lg:flex items-center gap-2">
            {currentUser ? (
              <div className="relative">
                <div
                  className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 cursor-pointer rounded-md px-2 py-1"
                  onClick={toggleDropdown}
                >
                  <div className="flex items-center gap-1">
                    <FiUser className="border p-[2px] rounded-full border-zinc-200 dark:border-zinc-700 text-[#333] dark:text-zinc-400" />
                    <h2 className="font-medium text-sm font-kanit text-zinc-700 dark:text-zinc-300">
                      {currentUser.displayName
                        .split(" ")
                        .map((name) => name[0])
                        .join("")
                        .toUpperCase()}
                    </h2>
                  </div>
                  <button>
                    <BiChevronDown className="text-[#333] dark:text-zinc-200" />
                  </button>
                </div>

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-44 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg">
                    <ul className="py-1 font-mukta font-normal text-zinc-800 dark:text-zinc-200">
                      <li className="flex items-center gap-2 text-sm px-4 py-1.5 mx-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer">
                        <LuUser />
                        Profile
                      </li>
                      <li className="flex items-center gap-2 text-sm px-4 py-1.5 mx-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer">
                        <CiSettings />
                        Settings
                      </li>
                      <li
                        onClick={handleLogout}
                        className=" flex items-center gap-2 text-sm px-4 py-1.5 mx-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                      >
                        <LuLogOut />
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
              <Link to="/login">
                <button className="font-inter text-xs font-medium bg-neutral-800 dark:bg-neutral-100 hover:bg-opacity-95 dark:hover:bg-opacity-90 px-3 py-1.5 rounded-md text-white dark:text-neutral-900">
                  Login
                </button>
              </Link>
              <Link to="/admin">
                <button className="flex items-center gap-1 px-3 py-1.5 rounded-md text-[#111] bg-neutral-200 hover:bg-neutral-300/50 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 dark:text-zinc-300">
                  <MdOutlineAdminPanelSettings />
                  <h2 className="font-inter text-xs font-medium">Admin</h2>
                </button>
              </Link>
              </div>
            )}
          </div>

          <div className="hidden lg:flex w-[1px] h-[24px] bg-zinc-300 dark:bg-zinc-700" />

          {/** social-icons */}
          <div className="hidden md:flex items-center">
            <Icon icon={FaGithub} />
            <Icon icon={FaLinkedin} />

            <ThemeToggle />
          </div>
        </div>

        <div className="flex md:hidden">
          <BiMenuAltRight
            onClick={toggleMenu}
            className="p-[2px] rounded-md cursor-pointer text-2xl text-neutral-900 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800"
          />
        </div>

        {/* Background Blur Overlay */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40"
            onClick={toggleMenu} // Close menu when clicking on overlay
          />
        )}

        {/** mobile navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden fixed inset-0 w-[75%] border-r dark:border-neutral-800 bg-white dark:bg-[#0f0f0f] z-50 flex flex-col transform transition-transform duration-300
                    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
                `}
          >
            <div className="absolute top-2 items-center justify-between flex w-full px-4">
              <Logo />
              <IoClose
                onClick={toggleMenu}
                className="border-2 p-[2px] text-2xl rounded-md border-neutral-300 dark:border-neutral-500 text-black dark:text-neutral-200"
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col mt-20 px-10 gap-4 text-lg font-semibold text-neutral-900 dark:text-neutral-200">
              <Link to="" onClick={toggleMenu}>
                <h2 className="text-base font-inter font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white">
                  Components
                </h2>
              </Link>
              <Link to="" onClick={toggleMenu}>
                <h2 className="text-base font-inter font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white">
                  Snippets
                </h2>
              </Link>
              {currentUser ? (
                <div className="flex items-center justify-between mt-2 border border-zinc-100 dark:border-zinc-800 rounded-lg px-4 py-4 cursor-pointer">
                  <div className="flex items-center gap-1 font-medium font-mukta text-sm text-[#333] dark:text-white">
                    <FiUser />
                    <h2>
                      {currentUser.displayName}
                    </h2>
                  </div>
                  <button onClick={handleLogout} className="text-xs font-mukta font-normal border border-zinc-100 dark:border-zinc-800 px-2 py-1 bg-zinc-100 dark:bg-zinc-900 hover:bg-white dark:hover:bg-zinc-800 rounded-md flex items-center gap-1">
                    <LuLogOut />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link to="/login" onClick={toggleMenu}>
                  <h2 className="text-base font-inter font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white">
                    Login
                  </h2>
                </Link>
                <Link to="/admin" onClick={toggleMenu}>
                <h2 className="text-base font-inter font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white">
                  Admin
                </h2>
              </Link>
                </div>
              )}
            </nav>

            <div className="bg-neutral-200  dark:bg-neutral-900 mt-8 mx-10 rounded-xl flex items-center justify-between px-4 py-4">
              <h2 className="font-inter text-sm text-neutral-800 dark:text-neutral-400">
                Appearance
              </h2>
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Navbar;
