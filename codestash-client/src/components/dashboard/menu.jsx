import React from 'react'
import { menuItems } from '../../constants/menu'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className=''>
        {menuItems.map((i, index) => (
            <div key={index} className='flex flex-col'>
              <span className='hidden lg:block'>{i.title}</span>
              {i.items.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                 className='flex items-center justify-center lg:justify-start'
                >
                    <item.icon />
                    <span className='hidden lg:block'>{item.label}</span>
                </Link>
              ))}
            </div>
        ))}

    </div>
  )
}

export default Menu
