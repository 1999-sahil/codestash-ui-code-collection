import React from 'react';
import { FiSun } from 'react-icons/fi';
import { RiMoonClearLine } from 'react-icons/ri';
import { useTheme } from './theme-provider';

function ThemeToggle() {
    const { theme, handleThemeSwitch } = useTheme();

  return (
    <div className='flex items-center justify-center'>
        <button
          onClick={handleThemeSwitch}
          className='hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 rounded-md'
        >
            {theme === "dark" ? <RiMoonClearLine className='text-white' /> : <FiSun className='text-neutral-900' />}
        </button>
    </div>
  )
}

export default ThemeToggle