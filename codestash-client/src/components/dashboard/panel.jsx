import React from 'react'

import Topbar from './topbar'
import AdminIntro from './admin-intro'

function DashboardPanel({ isExpanded, onSidebarToggle }) {
  return (
    <div className='bg-white dark:bg-[#0f0f0f] shadow rounded-md border border-zinc-200/50 dark:border-zinc-900 h-[220vh]'>
      <Topbar isExpanded={isExpanded} />

      <AdminIntro />
    </div>
  )
}

export default DashboardPanel