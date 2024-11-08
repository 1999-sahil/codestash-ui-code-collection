import React from 'react'
import { FaExpand } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { setCode, setCopied } from '../../../redux/features/copy/copySlice';
import { openModal } from '../../../redux/features/code-modal/codeModalSlice';
import tailwindImg from "../../../assets/homepage/tailwind.svg";

function HoverButton() {
    const dispatch = useDispatch();
  

  const componentCode = `
  <a className="group relative inline-block focus:outline-none focus:ring" href="#">
  <span
    className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
  ></span>

  <span
    className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
  >
    Download
  </span>
</a>
`;

    const handleCopy = () => {
        navigator.clipboard.writeText(componentCode).then(() => {
          dispatch(setCopied(true));  // Set the copied state to true
          dispatch(setCode(componentCode));  // Set the copied code in Redux state
          setTimeout(() => {
            dispatch(setCopied(false));  // Reset copied state after 2 seconds
          }, 2000);
        });
      };

  return (
    <div className="relative border border-neutral-200 dark:border-neutral-800 rounded-md w-full bg-white h-[160px] dark:bg-[#111]">
      {/** Top section */}
      <div className="flex items-center justify-between">
        <div className="border-b border-r rounded-br-md border-neutral-200 dark:border-neutral-800 w-fit text-[10px] lg:text-xs font-mukta font-normal text-zinc-500 dark:text-zinc-400 px-2 py-1">
          <h2>hover effect</h2>
        </div>
        <div
          onClick={() => dispatch(openModal(componentCode))}
          className="mx-2 cursor-pointer text-neutral-500 dark:text-neutral-400 text-sm hover:text-neutral-700 dark:hover:text-neutral-200"
        >
          <FaExpand className="text-sm" />
        </div>
      </div>

      {/** main section */}
      <div className="flex items-center justify-center py-6 lg:py-8">
      <a className="group relative inline-block focus:outline-none focus:ring" href="#">
  <span
    className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
  ></span>

  <span
    className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
  >
    Download
  </span>
</a>
      </div>

      {/** copy section */}
      <div className="absolute bottom-0 flex items-center justify-between w-full px-3 py-1.5 gap-2 border-t rounded-bl-md rounded-br-md border-neutral-200/50 dark:border-neutral-900">
        <img
          src={tailwindImg}
          alt=""
          className="w-4 h-4"
        />
      </div>
    </div>
  )
}

export default HoverButton
