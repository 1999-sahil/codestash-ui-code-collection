import React from 'react'
import { uiComponents } from '../constants/ui-components'
import { Link } from 'react-router-dom'

function UIComponents() {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {uiComponents.map((item, index) => (
            <Link to={item.href} key={index}>
              <div className="shadow-sm shadow-neutral-200 dark:shadow-neutral-900 border border-neutral-300/50 dark:border-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-800 w-full pl-4 pr-20 py-5 rounded-md flex flex-col items-start justify-start">
                <item.icon className="text-2xl mb-4 dark:text-neutral-100" />
                <h2 className="font-inter text-xs lg:text-sm font-medium text-black dark:text-white">
                    {item.title}
                </h2>
                <p className="font-ubuntu text-[10px] lg:text-xs font-medium text-neutral-500 dark:text-neutral-300">
                    {item.number} Components
                </p>
              </div>
            </Link>
        ))}
            
          </div>
  )
}

export default UIComponents