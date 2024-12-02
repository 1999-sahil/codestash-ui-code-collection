import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

function Loading() {
  
  return (
    <div className="flex items-center justify-center gap-2 font-mukta text-sm text-zinc-500 h-screen w-full">
      <AiOutlineLoading className="animate-spin" />
      Please wait, it will take few seconds
    </div>
  )
}

export default Loading