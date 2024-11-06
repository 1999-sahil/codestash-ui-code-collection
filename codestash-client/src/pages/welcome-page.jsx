import React from "react";
import { Link } from "react-router-dom";

import { LuMoveRight } from "react-icons/lu";
import { MdCropFree, MdChevronRight } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

import { welcomeTechnology } from "../constants/welcome";
import UIComponents from "../components/ui-components";
import CodeSnippets from "../components/code-snippets";

function Welcome() {

  return (
    <div className="flex flex-col">
      {/** Welcome Tagline */}
      <div className="flex flex-col w-full lg:max-w-2xl lg:px-6 py-5">
        <div className="flex items-center gap-2 mb-2">
          <MdCropFree className="text-neutral-500 dark:text-neutral-300" />
          <h2 className="text-sm font-mukta font-semibold text-neutral-900 dark:text-neutral-300">
            Archive for your application
          </h2>
          <LuMoveRight className="text-neutral-500 dark:text-neutral-300" />
        </div>

        {/** headline */}
        <div className="flex flex-col gap-4">
          <h1 className="font-bold font-kanit text-3xl lg:text-4xl text-black dark:text-white">
            Build Smarter, Code Faster :
          </h1>
          <p className="font-openSans text-neutral-700 dark:text-neutral-200">
            Effortless UI Components, crafted using Tailwind CSS. Spend more
            time creating code, and less time debugging errors with&nbsp;
            <span className="underline underline-offset-2">
              codestash/ui
            </span>{" "}
            code snippets.
          </p>
        </div>

        {/** tech icons */}
        <div className="mt-5 flex flex-wrap gap-4">
          {welcomeTechnology.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1 lg:gap-2 font-openSans font-medium text-xs lg:text-sm bg-neutral-100 dark:bg-neutral-900 w-fit py-1.5 px-2 rounded-full text-neutral-600 dark:text-neutral-400"
            >
              <img src={tech.href} alt="" className="w-4 h-4" />
              <h2>{tech.title}</h2>
            </div>
          ))}
        </div>

        {/** buttons */}
        <div className="flex items-center gap-3 mt-8">
          <Link to="">
            <button className="font-inter font-medium text-xs rounded-md px-3 py-2 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 hover:bg-opacity-90 dark:hover:bg-opacity-90">
              Get started
            </button>
          </Link>
          <Link to="">
            <button className="flex items-center gap-2 border border-neutral-200 dark:border-neutral-800 font-inter font-medium text-xs rounded-md px-3 py-2 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800">
              <FaGithub />
              Github
            </button>
          </Link>
        </div>
      </div>

      {/** Featured Components and Snippets */}
      <div className="my-8 flex flex-col gap-10 lg:px-6">
        {/** Components UI */}
        <div>
          {/** Breadcrumbs */}
          <div className="flex items-center gap-1 font-openSans text-sm font-medium text-[#333] dark:text-neutral-300">
            <IoMdHome />
            <MdChevronRight />
            <h2>Application</h2>
            <MdChevronRight />
            <h2>UI Components</h2>
            <LuMoveRight className="ml-2" />
          </div>

          {/** Cards */}
          <UIComponents />
        </div>

        {/** Components UI */}
        <div>
          {/** Breadcrumbs */}
          <div className="flex items-center gap-1 font-openSans text-sm font-medium text-[#333] dark:text-neutral-300">
            <IoMdHome />
            <MdChevronRight />
            <h2>Application</h2>
            <MdChevronRight />
            <h2>Code Snippets</h2>
            <LuMoveRight className="ml-2" />
          </div>

          {/** Cards */}
          <CodeSnippets />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
