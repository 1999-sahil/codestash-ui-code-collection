import React from 'react'
import { Link } from 'react-router-dom'

import { VscSettings } from 'react-icons/vsc'
import { CiShare1 } from 'react-icons/ci'
import { BsThreeDots } from 'react-icons/bs'

function AdminIntro() {
  return (
    <div className='flex items-center justify-between w-full px-4 py-4 border-t border-zinc-200/50 dark:border-zinc-900'>
        <div className='flex flex-col'>
          <span className='font-bold font-inter text-[#111] dark:text-zinc-100 text-2xl'>
            Welcome back, Sahil
          </span>
          <span className='font-medium font-mukta text-sm text-zinc-500'>
            December 02, 2024
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <Link to='' className='flex items-center gap-1'>
            <VscSettings className='w-4 h-4 text-zinc-500' />
            <h2 className='text-sm font-medium font-mukta text-zinc-700 dark:text-zinc-400'>Manage</h2>
          </Link>
          <Link to='' className='flex items-center gap-1'>
            <CiShare1 className='w-4 h-4 text-zinc-500' />
            <h2 className='text-sm font-medium font-mukta text-zinc-700 dark:text-zinc-400'>Share</h2>
          </Link>
          <Link to=''>
            <BsThreeDots className='w-4 h-4 text-zinc-500' />
          </Link>
        </div>
      </div>
  )
}

export default AdminIntro