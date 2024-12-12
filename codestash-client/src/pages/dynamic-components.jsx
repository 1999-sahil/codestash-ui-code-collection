import React from "react";
import { useParams } from "react-router-dom";
import { dashboardComponents } from "../constants/dashboard-components";
import Topbar from "../components/dashboard/topbar";
import CRUDButton from "../components/dashboard/crud-button";
import ManageComponents from "./crud-components/manage-components";

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
    <div className='bg-white dark:bg-[#0f0f0f] shadow rounded-md border border-zinc-200/50 dark:border-zinc-900 h-[160vh]'>
      <Topbar />
      <div className="px-4 mb-6 flex flex-col lg:flex-row gap-4 lg:items-end justify-between mt-6">
        <div className=""> 
          <div className="mb-5">
            <h2 className="text-sm font-medium font-inter text-zinc-500">Application UI /  Components  / 
              <span className="text-black dark:text-zinc-100">{" "}{component.title}</span>
            </h2>
          </div>
          <h1 className="text-2xl lg:text-4xl font-bold text-black dark:text-white">{component.title}</h1>
        </div>
        <CRUDButton
          manage={component.title}
          add={component.title}
          manageSrc="/dashboard/manage-components"
          addSrc="/dashboard/add-new-component"
        />
      </div>
      {/* Render your component-specific content here */}
      {component.title === "Button" && (
        <div>
          <ManageComponents title={component.title} />
        </div>
      )}
    </div>
  );
}

export default DynamicComponents;
