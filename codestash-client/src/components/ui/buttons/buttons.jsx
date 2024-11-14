import React, { useEffect, useState } from "react";
import BaseSolid from "./base-solid";
import Modal from "../../modal";
import HoverButton from "./hover-button";
import { FaExpand } from "react-icons/fa";
import tailwindImg from "../../../assets/homepage/tailwind.svg";
import { openModal } from "../../../redux/features/code-modal/codeModalSlice";
import { useDispatch } from "react-redux";

function Buttons() {

  const [uiData, setUiData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setUiData(jsonData);
    };

    fetchData();
  }, []);

  if (!uiData || uiData.length === 0) {
    return <div>Loading...</div>;
  }

  console.log("JSON DATA:", uiData);

  return (
    <div className="flex flex-col gap-5 lg:px-4">
      <div className="w-full flex items-center justify-center">
        <h2 className="flex items-center gap-1 font-mukta text-[10px] lg:text-xs font-medium text-center bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 rounded-full px-5 py-1.5">
          Enjoy Codestash-UI? Give it a star on Github
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--noto"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M7.45 123.27c2.27 2.46 11.62-1.83 19-5.27c5.53-2.57 27.66-11.65 38.66-16.36c2.97-1.27 7.29-2.93 10.4-7.02c2.76-3.64 10.08-19.1-4.66-34.76c-14.96-15.9-30.37-11.51-36.13-7.43c-3.39 2.4-6.15 7.81-7.39 10.56c-5.24 11.62-12.71 32.91-15.75 41.28c-2.23 6.17-6.38 16.56-4.13 19z"
              fill="#ffc107"
            ></path>

            <path
              d="M25.85 66.49c.14 1.74.49 4.57 1.69 10.02c.82 3.74 2.16 7.66 3.25 10.25c3.27 7.79 7.86 10.93 12.51 13.45c7.9 4.28 13.27 5.08 13.27 5.08l-6.44 2.63s-3.9-.81-9.22-3.43c-5.07-2.5-10.35-6.73-14.21-15.01c-1.67-3.59-2.64-7.07-3.2-9.83c-.69-3.42-.8-5.36-.8-5.36l3.15-7.8z"
              fill="#ff8f00"
            ></path>

            <path
              d="M17.94 86.77s.8 6.49 6.16 14.68c6.28 9.58 15.05 11.15 15.05 11.15l-5.83 2.4s-6.51-1.99-12.7-10.44c-3.86-5.27-4.94-11.57-4.94-11.57l2.26-6.22z"
              fill="#ff8f00"
            ></path>

            <path
              d="M12.39 102.15s1.46 5.6 4.66 9.78c3.81 4.99 8.66 6.44 8.66 6.44l-4.47 1.98s-3.39-.71-7.1-5.41c-2.82-3.57-3.62-7.67-3.62-7.67l1.87-5.12z"
              fill="#ff8f00"
            ></path>

            <path
              d="M9.96 116.37c-.2-.45-.2-.96.01-1.4l25.47-52.82l4.19 15.75l-26.8 38.71c-.72 1.08-2.34.94-2.87-.24z"
              fill="#fffde7"
              opacity=".44"
            ></path>

            <linearGradient
              id="IconifyId17ecdb2904d178eab14761"
              gradientUnits="userSpaceOnUse"
              x1="74.384"
              y1="61.839"
              x2="44.617"
              y2="79.699"
            >
              <stop offset=".024" stopColor="#8f4700"></stop>

              <stop offset="1" stopColor="#703e2d"></stop>
            </linearGradient>

            <path
              d="M41.65 83.19c11.9 13.92 25.45 12.18 29.96 8.66c4.52-3.53 8.09-15.66-3.76-29.35c-12.42-14.34-26.48-10.25-29.73-7.15s-7.39 15.07 3.53 27.84z"
              fill="url(#IconifyId17ecdb2904d178eab14761)"
            ></path>

            <path
              d="M82.52 88.92c-4.34-3.64-6.65-2.99-9.75-1.7c-4 1.66-10.29 2.89-18.83 0l2.57-6.19c5.07 1.71 8.74.88 11.91-.99c4.08-2.4 9.66-5.69 18.34 1.6c3.62 3.04 7.33 5.06 10.05 4.14c1.98-.66 3.03-3.61 3.56-5.96c.05-.21.13-.81.19-1.34c.48-3.67 1.28-11.59 7.18-15.64c6.31-4.33 12.94-4.33 12.94-4.33l1.2 11.92c-3.05-.45-5.17.17-6.96 1.16c-6.74 3.75-.87 18.15-11.36 22.99c-10.09 4.69-18.34-3.4-21.04-5.66z"
              fill="#03a9f4"
            ></path>

            <path
              d="M45.4 73.72l-4.34-3.89c7.97-8.9 5.87-15.44 4.34-20.2c-.31-.96-.6-1.87-.79-2.74c-.68-3.08-.82-5.76-.61-8.1c-3.06-3.81-4.41-7.8-4.5-8.07c-1.86-5.63-.46-11.12 2.75-16.27C48.74 4 60.49 4 60.49 4l3.92 10.49c-2.98-.12-12.75.03-15.75 4.76c-3.79 5.96-1.3 9.64-1.12 10.06c.73-.95 1.47-1.71 2.13-2.3c4.79-4.25 8.95-4.86 11.6-4.62c2.98.27 5.68 1.77 7.61 4.23c2.11 2.7 2.98 6.21 2.31 9.4c-.65 3.11-2.72 5.74-5.83 7.41c-5.43 2.92-9.95 2.52-12.98 1.51c.02.07.03.15.05.22c.11.5.33 1.2.59 2.01c1.77 5.48 5.06 14.18-7.62 26.55zm7.35-37.53c.58.42 1.19.77 1.82 1.02c2.1.84 4.39.56 6.99-.84c1.53-.82 1.71-1.7 1.77-1.99c.18-.87-.12-1.98-.77-2.81c-.57-.73-1.23-1.11-2.02-1.19c-1.5-.13-3.53.82-5.56 2.63c-.97.87-1.71 1.94-2.23 3.18z"
              fill="#f44336"
            ></path>

            <path
              d="M62.77 75.35l-6.21-.17s2.95-16.66 12.5-19.46c1.79-.52 3.75-1.05 5.72-1.34c1.17-.18 3.02-.45 3.93-.79c.21-1.57-.45-3.57-1.19-5.84c-.58-1.76-1.18-3.57-1.5-5.55c-.62-3.86.41-7.27 2.9-9.62c3.04-2.85 7.95-3.76 13.49-2.5c3.16.72 5.49 2.27 7.54 3.63c2.93 1.95 4.64 2.94 8.22.53c4.33-2.92-1.33-14.35-4.34-20.95l11.23-4.68c1.51 3.3 8.8 20.28 3.99 29.97c-1.62 3.26-4.41 5.42-8.07 6.23c-7.96 1.78-12.62-1.32-16.02-3.58c-1.61-1.07-3.02-1.91-4.55-2.35c-10.63-3.03 4.21 12.61-2.74 19.64c-4.17 4.21-14.36 5.32-15.02 5.48c-6.56 1.58-9.88 11.35-9.88 11.35z"
              fill="#f48fb1"
            ></path>

            <path
              d="M43.99 38.79c-.19 2.2-.28 3.51.29 6.37c2.75 2.02 8.74 2.02 8.74 2.02c-.26-.81-.49-1.51-.59-2.01c-.02-.07-.03-.15-.05-.22c-6.09-3.04-8.39-6.16-8.39-6.16z"
              fill="#c92b27"
            ></path>

            <g>
              <path
                fill="#ffc107"
                d="M31.53 48.64l-10.34-5.07l5.15-7.44l8.11 5.37z"
              ></path>
            </g>

            <g>
              <path
                d="M16.29 34.6c-5.28-.71-10.66-5.19-11.25-5.7l5.19-6.09c1.57 1.33 4.9 3.56 7.13 3.86l-1.07 7.93z"
                fill="#fb8c00"
              ></path>
            </g>

            <g>
              <path
                d="M25.61 21.27l-7.6-2.49c.87-2.66 1.1-5.53.65-8.3l7.9-1.27c.65 4.02.32 8.19-.95 12.06z"
                fill="#03a9f4"
              ></path>
            </g>

            <g>
              <path
                fill="#fb8c00"
                d="M73.073 15.325l7.815-1.71l2.257 10.316l-7.815 1.71z"
              ></path>
            </g>

            <g>
              <path
                d="M92.46 17.77l-5.5-5.81c2.88-2.73 3.54-6.3 3.54-6.34l7.9 1.29c-.1.63-1.11 6.29-5.94 10.86z"
                fill="#ffc107"
              ></path>
            </g>

            <g>
              <path
                fill="#fb8c00"
                d="M95.516 48.581l6.987-2.183l2.387 7.636l-6.987 2.183z"
              ></path>
            </g>

            <g>
              <path
                d="M97.55 113.03l-7.95-.94c.34-2.83-1.77-6.3-2.35-7.07l6.4-4.8c.48.63 4.65 6.4 3.9 12.81z"
                fill="#f44336"
              ></path>
            </g>

            <g>
              <path
                d="M120.37 102.89c-2.99-.45-6.05-.63-9.07-.52l-.27-8c3.51-.12 7.06.08 10.53.61l-1.19 7.91z"
                fill="#fb8c00"
              ></path>
            </g>

            <g>
              <path
                fill="#f48fb1"
                d="M109.614 113.902l5.62-5.693l7.736 7.637l-5.621 5.693z"
              ></path>
            </g>

            <path
              fill="#f44336"
              d="M93.099 63.331l5.78 6.609l-6.609 5.78l-5.78-6.609z"
            ></path>
          </svg>
        </h2>
      </div>

      <h2 className="text-2xl lg:text-3xl my-2 lg:my-4 font-bold font-openSans text-neutral-900 dark:text-neutral-100">
        Button Components
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <HoverButton />
        <BaseSolid />

        <Modal />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {uiData.map((item, index) => (
          <div
            key={index}
            className="relative border border-neutral-200 dark:border-neutral-800 rounded-md w-full bg-white h-[160px] dark:bg-[#111]"
          >
            {/** Top section */}
            <div className="flex items-center justify-between">
              <div className="border-b border-r rounded-br-md border-neutral-200 dark:border-neutral-800 w-fit text-[10px] lg:text-xs font-mukta font-normal text-zinc-500 dark:text-zinc-400 px-2 py-1">
                <h2>{item.effect}</h2>
              </div>
              <div
                onClick={() => dispatch(openModal(item.code))}
                className="mx-2 cursor-pointer text-neutral-500 dark:text-neutral-400 text-sm hover:text-neutral-700 dark:hover:text-neutral-200"
              >
                <FaExpand className="text-sm cursor-pointer" />
              </div>
            </div>
            {/** main button section */}
            <div className="absolute top-10 bottom-0 right-0 left-0 flex items-center justify-center">
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: item.code }}
              />
            </div>

            {/** bottom section */}
            <div className="absolute bottom-0 flex items-center justify-between w-full px-3 py-1.5 gap-2 border-t rounded-bl-md rounded-br-md border-neutral-200/50 dark:border-neutral-900">
              <img src={tailwindImg} alt="" className="w-4 h-4" />
            </div>
          </div>
        ))}
        <Modal />
      </div>
      {uiData.map((data, index) => (
      <iframe
        key={index}
        srcDoc={`<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${data.title}</title>
            <!-- Link to Tailwind CSS v3.x -->
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css" rel="stylesheet">
          </head>
          <body class="flex justify-center items-center h-screen">
            <div class="p-5">
              ${data.code}
            </div>
          </body>
          </html>`}
        title={data.title}
        width="50%"
        height="200px"
        frameBorder="2"
        className="border rounded-md shadow-lg prose"
        style={{ maxWidth: '100%' }}  // Ensure it is responsive
      />
    ))}
    </div>
  );
}

export default Buttons;
