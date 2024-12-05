import React from 'react'
import { Link } from 'react-router-dom'

import { VscSettings } from 'react-icons/vsc'
import { CiShare1 } from 'react-icons/ci'
import { BsThreeDots } from 'react-icons/bs'

function AdminIntro() {
  return (
    <div className='flex items-start justify-between w-full px-4 py-4 border-t border-zinc-200/50 dark:border-zinc-900'>
        <div className='flex flex-col'>
          <span className='font-bold font-inter text-[#111] dark:text-zinc-100 text-xl md:text-2xl'>
            Welcome back, Sahil
          </span>
          <span className='font-medium font-mukta text-sm text-zinc-500'>
            December 02, 2024
          </span>
        </div>
        <div className='flex items-center gap-2 md:gap-4'>
          <Link to='' className='flex items-center gap-1 border border-zinc-200 dark:border-zinc-800 rounded-md px-1.5 md:px-3 py-1 text-zinc-600 dark:text-zinc-300 font-inter text-xs font-medium'>
            <VscSettings />
            <h2 >Manage</h2>
          </Link>
          <Link to='' className='flex items-center gap-1 border border-zinc-200 dark:border-zinc-800 rounded-md px-1.5 md:px-3 py-1 text-zinc-600 dark:text-zinc-300 font-inter text-xs font-medium'>
            <CiShare1 />
            <h2 >Share</h2>
          </Link>
          <Link to=''>
            <BsThreeDots className='w-4 h-4 text-zinc-500' />
          </Link>
        </div>
      </div>
  )
}

export default AdminIntro