import React from 'react'
import { MdAdd, MdOutlineEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'

function CRUDButton({ manage, add, manageSrc }) {
  return (
    <div className='flex items-center gap-3'>
        <Link to={manageSrc}>
            <button className='flex items-center gap-1 text-xs font-mukta font-medium border rounded-md border-zinc-300 dark:border-zinc-700 text-[#333] dark:text-zinc-300 py-1 px-3'>
                <MdOutlineEdit />
                Manage {manage}s
            </button>
        </Link>
        <Link to="">
            <button className='flex items-center gap-1 text-xs font-medium font-mukta text-white dark:text-black bg-zinc-800 dark:bg-zinc-100 rounded-md px-3 py-1.5'>
                <MdAdd />
                Add New {add}
            </button>
        </Link>
    </div>
  )
}

export default CRUDButton