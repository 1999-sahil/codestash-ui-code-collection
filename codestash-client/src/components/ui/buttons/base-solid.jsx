import React from 'react'
import { LuClipboard } from 'react-icons/lu'
import { FaExpand } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { openModal } from '../../../redux/features/code-modal/codeModalSlice';

function BaseSolid() {

  const dispatch = useDispatch();

  const componentCode = `import React from 'react';

  function BaseSolid() {
    return (
      <div className='border border-neutral-200 dark:border-neutral-800 rounded-md w-full bg-white dark:bg-[#111]'>
        {/* Top section */}
        <div className='flex items-center justify-between'>
          <div className='border-b border-r rounded-br-md border-neutral-200 dark:border-neutral-800 w-fit text-[10px] lg:text-xs font-mukta font-normal text-zinc-500 dark:text-zinc-400 px-2 py-1'>
            <h2>hover effect</h2>
          </div>
          <div className='mx-2 cursor-pointer'>
            <FaExpand className='text-sm' />
          </div>
        </div>

        {/* main section */}
        <div className='flex items-center justify-center py-6 lg:py-8'>
          <button className='border rounded-full bg-red-600 hover:bg-red-700 text-white px-4 py-2'>
            Hover Me
          </button>
        </div>
      </div>
    );
  }

  export default BaseSolid;
`;

  return (
    <div className='border border-neutral-200 dark:border-neutral-800 rounded-md w-full bg-white dark:bg-[#111]'>
        {/** Top section */}
        <div className='flex items-center justify-between'>
          <div className='border-b border-r rounded-br-md border-neutral-200 dark:border-neutral-800 w-fit text-[10px] lg:text-xs font-mukta font-normal text-zinc-500 dark:text-zinc-400 px-2 py-1'>
            <h2>hover effect</h2>
          </div>
          <div
            onClick={() => dispatch(openModal(componentCode))}
            className='mx-2 cursor-pointer text-neutral-500 dark:text-neutral-400 text-sm hover:text-neutral-700 dark:hover:text-neutral-200'
          >
            <FaExpand className='text-sm' />
          </div>
        </div>

        {/** main section */}
        <div className='flex items-center justify-center py-6 lg:py-8'>
            <button className='border rounded-full bg-red-600 hover:bg-red-700 hover:ring-1 hover:ring-red-600 text-white text-sm px-4 py-2'>
                Hover Me
            </button>
        </div>

        {/** copy section */}
        <div className='flex items-center justify-center gap-2 border-t rounded-bl-md rounded-br-md border-neutral-200 dark:border-neutral-900 text-xs font-openSans font-medium text-neutral-700 dark:text-neutral-200 bg-zinc-50 dark:bg-neutral-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 cursor-pointer py-1.5'>
            <LuClipboard />
            <h2 className=''>Copy</h2>
        </div>
    </div>
  )
}

export default BaseSolid