import React from 'react'
import { Link } from 'react-router-dom'
import { snippets } from '../constants/snippets'

function CodeSnippets() {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    {snippets.map((item, index) => (
        <Link to={item.href} key={index}>
              <div className="shadow-md shadow-neutral-200 dark:shadow-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-800 w-full pl-4 pr-20 py-5 rounded-md flex flex-col items-start justify-start">
                <item.icon className="text-2xl mb-4 dark:text-neutral-100" />
                <h2 className="font-inter text-xs lg:text-sm font-medium text-neutral-900 dark:text-neutral-200">
                    {item.title}
                </h2>
                <p className="font-ubuntu text-[10px] lg:text-xs font-medium text-neutral-500 dark:text-neutral-300">
                    {item.desc}
                </p>
                <div className='flex items-center gap-2 whitespace-nowrap text-center'>
                {item.tags.map((tag, index) => (
                    <h2 key={index} className="text-[10px] text-center font-mukta font-medium text-zinc-700 dark:text-zinc-300 mt-2 bg-zinc-200 dark:bg-zinc-900 rounded-xl px-2 py-[2px]">
                        {tag}
                    </h2>
                ))}
                </div>
              </div>
            </Link>
    ))}
            </div>
  )
}

export default CodeSnippets