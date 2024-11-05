import React from 'react'
import { Link } from 'react-router-dom'

function Icon({ icon: SocialIcon, href }) {
  return (
    <Link to={href} className='hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 rounded-md'>
        <SocialIcon className='text-neutral-900 dark:text-neutral-100 text-lg' />
    </Link>
  )
}

export default Icon