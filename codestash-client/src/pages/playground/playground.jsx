import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView } from "@uiw/react-codemirror";

import { GoCopy } from "react-icons/go";

import Topbar from "../../components/dashboard/topbar";

function Playground() {
  const extension = [html(), EditorView.lineWrapping];

  const [code, setCode] = useState(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
      <title>Codestash Editor</title>
    </head>
    <body class="bg-gray-100 p-4">
      <div class="text-center space-y-2">
        <h1 class="text-4xl font-bold text-blue-500">Hello, Codestash UI!</h1>
        <h2 class="text-xl font-bold text-purple-500">Tailwind CSS Playground...</h2>
        <p class="text-gray-700">Start editing to see the magic happen ✨</p>
      </div>
    </body>
    </html>
      `);

  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const blob = new Blob([code], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      setIframeSrc(url);
    }, 300); // Debounce for smoother updates

    return () => clearTimeout(timeout);
  }, [code]);

  return (
    <div className="bg-white dark:bg-[#0f0f0f] shadow rounded-md border border-zinc-200/50 dark:border-zinc-900 min-h-screen space-y-1">
      <Topbar />
      <div className="flex items-center justify-between px-2 pt-2">
        <span className="text-xs font-bold font-inter text-zinc-200 dark:text-zinc-800 bg-neutral-800 dark:bg-neutral-200 px-3 py-1 rounded">
          HTML
        </span>
        <button className="flex items-center gap-1 border border-neutral-400 dark:border-neutral-700 rounded px-2 py-1 text-zinc-800 dark:text-zinc-200">
          <GoCopy />
          <h3 className="text-xs font-inter">Copy code</h3>
        </button>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-between p-2">
        {/* Code Editor */}
        <div className="w-full lg:w-1/2 h-full">
          <CodeMirror
            value={code}
            height="100%"
            autoFocus={false}
            extensions={extension}
            theme={oneDark}
            onChange={(value) => setCode(value)}
            className="h-full lg:h-screen overflow-hidden decoration-transparent text-xs outline-none"
          />
        </div>

        {/* Live Output */}
        <div className="w-full lg:w-1/2 h-full bg-gray-200">
          <iframe
            src={iframeSrc}
            title="Live Output"
            sandbox="allow-scripts"
            className="w-full lg:min-h-screen h-full decoration-transparent outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Playground;
