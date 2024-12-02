import React from 'react'
import { AccountToggle } from './account-toggle'
import { Plan } from './plan'

function Bottom() {
  return (
    <div className="flex flex-col sticky gap-4 h-12 top-[calc(100vh_-_48px_-_8px)] border-t px-2 border-zinc-200/50 dark:border-zinc-900 justify-end">
        <AccountToggle />
       
    </div>
  )
}

export default Bottom