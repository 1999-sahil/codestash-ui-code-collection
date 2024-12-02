import React from 'react'

import ThemeToggle from '../theme-toggle'

import { MdAdminPanelSettings } from 'react-icons/md'
import { FaChevronRight } from 'react-icons/fa6'
import { RiHome2Fill } from 'react-icons/ri'

function Topbar({ isExpanded }) {
  return (
    <div className={`flex items-center justify-between pr-4 py-2
      ${isExpanded ? "pl-4" : "pl-10"}
    `}>
      {/** breadcrumb */}
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-1 text-xs text-zinc-700 dark:text-zinc-300 font-medium font-inter'>
          <MdAdminPanelSettings className='text-zinc-400 w-4 h-4' />
          Admin
        </div>
        <FaChevronRight className='text-zinc-400 w-3 h-3' />
        <div className='flex items-center gap-1 text-xs text-zinc-700 dark:text-zinc-300 font-medium font-inter'>
          <RiHome2Fill className='text-zinc-400 w-4 h-4' /> 
          Home
        </div>
      </div>
        {/** name and date */}
        <div className='flex items-center w-fit gap-2'>
        <ThemeToggle />
          <img
          src="https://api.dicebear.com/9.x/notionists/svg"
          alt="avatar"
          className="size-6 rounded shrink-0 bg-violet-500 shadow"
        />
        </div>
    </div>
  )
}

export default Topbar
