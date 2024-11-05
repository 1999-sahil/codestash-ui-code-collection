import React, { useState } from 'react'
import Logo from './logo'
import { BiMenuAltRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Icon from './icon'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import ThemeToggle from './theme-toggle'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };

  return (
    <div className='max-w-screen-2xl w-full mx-auto px-2 md:px-4 lg:px-6 py-2 border-b border-zinc-100 dark:border-neutral-800 overflow-hidden'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-10'>
                <Logo />

                {/** nav-links */}
                <div className='hidden md:flex items-center gap-5'>
                    <Link to=''>
                        <h2 className='text-sm font-inter font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white'>Components</h2>
                    </Link>
                    <Link to=''>
                        <h2 className='text-sm font-inter font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white'>Snippets</h2>
                    </Link>
                </div>
            </div>

            {/** right side */}
            <div className='flex items-center gap-4'>
                {/** buttons */}
                <div className='hidden lg:flex items-center gap-2'>
                    <Link to='/login'>
                      <button className='font-inter text-xs font-medium bg-neutral-800 dark:bg-neutral-100 hover:bg-opacity-95 dark:hover:bg-opacity-90 px-3 py-1.5 rounded-md text-white dark:text-neutral-900'>
                        Login
                      </button>
                    </Link>
                </div>

                <div className='hidden lg:flex w-[1px] h-[24px] bg-zinc-300 dark:bg-zinc-700' />

                {/** social-icons */}    
                <div className='hidden md:flex items-center'>
                  <Icon icon={FaGithub} />
                  <Icon icon={FaLinkedin} />

                  <ThemeToggle />
                </div>
            </div>

            <div className='flex md:hidden'>
              <BiMenuAltRight onClick={toggleMenu}className='p-[2px] rounded-md cursor-pointer text-2xl text-neutral-900 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800' />
            </div>

            {/* Background Blur Overlay */}
            {isMenuOpen && (
                <div
                  className="md:hidden fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40"
                  onClick={toggleMenu} // Close menu when clicking on overlay
                />
            )}

            {/** mobile navigation */}
            {isMenuOpen && (
                <div className={`md:hidden fixed inset-0 w-[75%] border-r dark:border-neutral-800 bg-white dark:bg-[#0f0f0f] z-50 flex flex-col transform transition-transform duration-300
                    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
                `}>
                    <div className='absolute top-2 items-center justify-between flex w-full px-4'>
                        <Logo />
                        <IoClose
                          onClick={toggleMenu}
                          className="border-2 p-[2px] text-2xl rounded-md border-neutral-300 dark:border-neutral-500 text-black dark:text-neutral-200"
                        />
                    </div>
      
                    {/* Navigation Links */}
                    <nav className="flex flex-col mt-20 px-10 gap-4 text-lg font-semibold text-neutral-900 dark:text-neutral-200">
                      <Link to='' onClick={toggleMenu}>
                        <h2 className='text-base font-inter font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white'>Components</h2>
                      </Link>
                      <Link to='' onClick={toggleMenu}>
                        <h2 className='text-base font-inter font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white'>Snippets</h2>
                      </Link>
                      <Link to='/login' onClick={toggleMenu}>
                        <h2 className='text-base font-inter font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white'>Login</h2>
                      </Link>
                    </nav>

                    <div className='bg-neutral-200  dark:bg-neutral-900 mt-8 mx-10 rounded-xl flex items-center justify-between px-4 py-4'>
                        <h2 className='font-inter text-sm text-neutral-800 dark:text-neutral-400'>Appearance</h2>
                        <ThemeToggle />
                    </div>

              </div>
            )}
        </div>
    </div>
  )
}

export default Navbar
