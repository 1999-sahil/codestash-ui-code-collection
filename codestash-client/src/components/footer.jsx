import React from 'react'
import Logo from './logo'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='max-w-screen-2xl w-full mx-auto px-2 md:px-4 lg:px-6 pt-2 pb-4 border-t border-zinc-100 dark:border-neutral-800 overflow-hidden'>
        <div className='flex flex-col items-starts gap-5 mt-2'>
        <Logo />
        <p className='text-sm font-mukta font-normal w-[80%] lg:w-1/2 leading-4 px-4 text-neutral-800 dark:text-neutral-300'>
          Free open source Tailwind CSS components and your code snippets so that you don't
          have to repeat yourself writing same code in coding terms to prevent DRY 
        </p>
        <div className='flex flex-col md:flex-row justify-between px-4'>
            <div className='mb-3 flex items-center gap-2'>
            <Link to='' className='text-xs font-kanit font-medium text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white'>
              Github
            </Link>
            <Link to='' className='text-xs font-kanit font-medium text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white'>
              FAQs
            </Link>
            <Link to='' className='text-xs font-kanit font-medium text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white'>
              Linkedin
            </Link>
            <Link to='' className='text-xs font-kanit font-medium text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white'>
              Acknowledgement
            </Link>
            </div>
            <h2 className='text-xs flex items-center gap-1 font-poppins text-neutral-600 dark:text-neutral-400'>
                Created by
                <span className='font-medium text-neutral-800 dark:text-neutral-100'>Sahil Ahmed</span>
            </h2>
        </div>
        </div>
    </div>
  )
}

export default Footer