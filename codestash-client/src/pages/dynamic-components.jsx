import React from "react";
import { useParams } from "react-router-dom";
import { dashboardComponents } from "../constants/dashboard-components";

function DynamicComponents() {
  const { componentId } = useParams();

  // Find the matching component by its ID
  const component = dashboardComponents.find(
    (item) => item.href.split("/").pop() === componentId
  );

  if (!component) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Component Not Found</h1>
        <p>The requested component does not exist.</p>
      </div>
    );
  }

  return (
    <div className='bg-white dark:bg-[#0f0f0f] shadow rounded-md border border-zinc-200/50 dark:border-zinc-900 h-screen'>
      <h1 className="text-2xl font-bold">{component.title}</h1>
      <p className="text-gray-700 dark:text-gray-300">
        This is the {component.title} component.
      </p>
      {/* Render your component-specific content here */}
    </div>
  );
}

export default DynamicComponents;
