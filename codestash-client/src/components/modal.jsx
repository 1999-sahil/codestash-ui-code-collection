import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { closeModal } from "../redux/features/code-modal/codeModalSlice";
import { setCopied } from "../redux/features/copy/copySlice";

import { IoClose } from "react-icons/io5";
import { FiClipboard } from "react-icons/fi";
import { IoMdCode } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

import beautify from "js-beautify";

function Modal() {
  const dispatch = useDispatch();

  const { isOpen, code } = useSelector((state) => state.codeModal);
  const { copied } = useSelector((state) => state.copy);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      dispatch(setCopied(true));
      setTimeout(() => {
        dispatch(setCopied(false));
      }, 2000);
    });
  };

  // Prettifying the code using js-beautify
  const prettifiedCode = beautify.html(code, {
    indent_size: 1,   // Indentation level
    wrap_line_length: 30, // Optional: Wrap lines at this length
    max_preserve_newlines: 2, // Optional: Limit newlines preserved
  });

  console.log("Code: ", code);
  console.log("Formatted Code: ", prettifiedCode);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white dark:bg-[#111] border dark:border-neutral-700 py-1 px-2 rounded-md w-[95vw] max-w-2xl mx-2 sm:mx-6 md:mx-auto min-h-[300px] h-auto">
        <button
          onClick={() => dispatch(closeModal())}
          className="absolute right-2 top-2"
        >
          <IoClose className="text-xl text-neutral-700 dark:text-neutral-300" />
        </button>
        <div className="flex items-center justify-between mt-10 mb-2 px-2">
          <h2 className="flex items-center gap-1 px-1 border-b-2 w-fit text-xs lg:text-sm font-mukta font-bold dark:text-white border-[#111] dark:border-white">
            <IoMdCode />
            Code
          </h2>
          <div
            onClick={handleCopy}
            className="border border-neutral-200 dark:border-neutral-700 cursor-pointer rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 p-1"
          >
            {copied ? (
              <FaCheck className="text-[#111] dark:text-white text-xs" />
            ) : (
              <FiClipboard className="text-[#111] dark:text-white text-xs" />
            )}
          </div>
        </div>

        {/* Code section with scrollable content */}
        <div className="max-h-[60vh] overflow-x-auto overflow-y-auto scrollbar-custom">
          <pre className="rounded-md text-[8px] md:text-xs text-left min-h-[20vh] max-w-full">
            <SyntaxHighlighter
              language="html"
              style={a11yDark}
              wrapLines
              wrapLongLines
              customStyle={{
                borderRadius: "6px",
                minHeight: "200px",
                maxWidth: "100%",
                padding: "16px",
                whiteSpace: "no-wrap"
              }}
            >
              {prettifiedCode}
            </SyntaxHighlighter>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Modal;
