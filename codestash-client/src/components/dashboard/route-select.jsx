import React from 'react';

import { FiHome } from 'react-icons/fi';
import { MdDashboard, MdAnalytics } from 'react-icons/md';
import { IoNotifications } from 'react-icons/io5';
import { AiFillSetting } from 'react-icons/ai';

function RouteSelect() {
  return (
    <div className='space-y-1'>
      <Components title="Accordion" />
      <Components title="Alert" />
      <Components title="Avatar" />
      <Components title="Breadcrumbs" />
      <Components title="Button" />
      <Components title="Card" />
      <Components title="Carousal" />
      <Components title="Checkbox" />
      <Components title="Dialog" />
      <Components title="Form" />
      <Components title="Hover Card" />
      <Components title="Input" />
      <Components title="Label" />
      <Components title="Progress" />
      <Components title="Seperator" />
      <Components title="Skeleton" />
      <Components title="Sonner" />
      <Components title="Textarea" />
      <Components title="Tooltip" />
      </div>
  )
}

export const Route = ({ 
  selected, 
  icon: Icon, 
  title 
}) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 font-inter w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color]
        ${selected ? "bg-white dark:bg-[#111] text-stone-950 dark:text-white shadow dark:shadow-stone-900 font-medium" : "bg-transparent text-zinc-800 dark:text-stone-300 shadow-none hover:bg-stone-200 dark:hover:bg-zinc-950"}
      `}
    >
      <Icon />
      <span>
        {title}
      </span>
    </button>
  );
};


const Components = ({ title }) => {
  return (
    <button className={`
      text-sm font-openSans w-full text-start ml-8 py-1 hover:underline text-zinc-900 dark:text-zinc-300
    `}>
      {title}
    </button>
  )
}

export default RouteSelect
