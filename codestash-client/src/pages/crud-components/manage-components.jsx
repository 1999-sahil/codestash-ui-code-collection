import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import {
  useDeleteButtonMutation,
  useFetchAllButtonsQuery,
} from "../../redux/features/buttons/buttonsApi";

import { MdClose, MdOutlineDelete } from "react-icons/md";
import { CiViewTable } from "react-icons/ci";
import { IoMdCode } from "react-icons/io";

function ManageComponents({ title }) {
  const navigate = useNavigate();
  const { data: buttons, refetch } = useFetchAllButtonsQuery();
  //console.log("All Fetched Buttons: ", buttons);

  const [deleteButton] = useDeleteButtonMutation();

  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedCode, setSelectedCode] = useState("");

  const [warningPopup, setWarningPopup] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Handle deleting a book
  const handleDeleteBook = async (id) => {
    //console.log("clicked button id", id);
    try {
      await deleteButton(id).unwrap();
      toast.success("Component deleted successfully!");
      refetch();
      setWarningPopup(false);
    } catch (error) {
      console.error("Failed to delete component:", error.message);
      toast.error("Failed to delete component. Please try again.");
    }
  };

  // Handle navigating to Edit Book page
  const handleEditClick = (id) => {
    navigate(`/edit-components/${id}`);
  };

  // Handle viewing the code in a popup
  const handleViewCode = (code) => {
    setSelectedCode(code);
    setPopupVisible(true);
  };

  // Handle delete warning popup
  const handleDeleteWarning = (data) => {
    console.log("delete clicked")
    setWarningPopup(true);
    setSelectedComponent(data);
  };

  return (
    <section className="h-full px-4 py-4">
      <div className="w-full">
        <div className="relative flex flex-col min-w-0 break-words w-full rounded">
          <div className="mb-4">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h3 className="flex items-center gap-1 font-mukta font-medium text-xs md:text-sm w-fit border border-zinc-200 dark:border-zinc-800 text-[#333] dark:text-zinc-400 px-4 py-1 rounded-md">
                  <CiViewTable />
                  Table
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button
                  className="text-xs font-mukta font-medium border border-zinc-200 dark:border-zinc-800 text-[#333] dark:text-zinc-400 px-4 py-1 rounded-md"
                  type="button"
                >
                  See All
                </button>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse">
              <thead className="bg-zinc-100 dark:bg-zinc-900">
                <tr>
                  <th className="px-6 py-3 align-middle uppercase whitespace-nowrap text-left text-xs font-mukta text-[#333] dark:text-zinc-300">
                    #
                  </th>
                  <th className="px-6 py-3 align-middle uppercase whitespace-nowrap text-left text-xs font-mukta text-[#333] dark:text-zinc-300">
                    id
                  </th>
                  <th className="px-6 py-3 align-middle uppercase whitespace-nowrap text-left text-xs font-mukta text-[#333] dark:text-zinc-300">
                    Button Title
                  </th>
                  <th className="px-6 py-3 align-middle uppercase whitespace-nowrap text-left text-xs font-mukta text-[#333] dark:text-zinc-300">
                    Code
                  </th>
                  <th className="px-6 py-3 align-middle uppercase whitespace-nowrap text-left text-xs font-mukta text-[#333] dark:text-zinc-300">
                    Effects
                  </th>
                  <th className="px-6 py-3 align-middle uppercase whitespace-nowrap text-left text-xs font-mukta text-[#333] dark:text-zinc-300">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {buttons?.buttons?.length > 0 ? (
                  buttons.buttons.map((button, index) => (
                    <tr key={index} className="border-b border-zinc-200/50 dark:border-zinc-900">
                      <th className="px-6 align-middle text-xs whitespace-nowrap text-left text-zinc-500 font-mukta">
                        {index + 1}
                      </th>
                      <th className="px-6 align-middle text-xs whitespace-nowrap text-left text-[#333] dark:text-zinc-400 font-mukta font-medium">
                        {button._id}
                      </th>
                      <td className="px-6 align-middle text-xs whitespace-nowrap font-medium font-poppins text-[#111] dark:text-zinc-200">
                        {button.title}
                      </td>
                      <td className="px-6 align-middle text-xs whitespace-nowrap font-inter text-[#111] dark:text-zinc-400">
                        <button
                          className="text-blue-500 hover:underline"
                          onClick={() => handleViewCode(button.code)}
                        >
                          view
                        </button>
                      </td>
                      <td className="px-6 align-middle text-xs capitalize whitespace-nowrap font-inter text-zinc-500 dark:text-zinc-400">
                        {button.effect}
                      </td>
                      <td className="px-6 align-middle text-xs whitespace-nowrap p-4 space-x-4">
                        <Link
                          to={`/dashboard/edit-component/${button._id}`}
                          className="font-medium font-kanit text-[#333] dark:text-zinc-300 mr-2 hover:underline underline-offset-2"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeleteWarning(button)}
                          className="rounded-md hover:border-zinc-400 dark:hover:border-zinc-500 border border-zinc-200 dark:border-zinc-800 p-1 text-[#333] dark:text-zinc-400"
                        >
                          <MdOutlineDelete className="" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 w-full">
                    <td colSpan="5" className="text-center py-4 text-gray-500 text-xs font-inter font-medium">
                      No {title} found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Popup for viewing code */}
      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3 max-w-2xl w-[98%]">
          <h2 className="flex items-center gap-1 mb-4 px-1 border-b-2 w-fit text-xs lg:text-sm font-mukta font-bold dark:text-white border-[#111] dark:border-white">
            <IoMdCode />
            Code
          </h2>
            <pre className="rounded-md text-[10px] lg:text-xs overflow-x-auto">
              <SyntaxHighlighter
              language="html"
              style={a11yDark}
              wrapLines
              wrapLongLines
              customStyle={{
                borderRadius: "6px",
                minHeight: "200px",
                maxWidth: "100%",
                padding: "16px",
                whiteSpace: "no-wrap"
              }}
              >
              {selectedCode}
              </SyntaxHighlighter>
            </pre>
            <button
              className="mt-4 px-4 py-1.5 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black font-mukta font-medium text-xs rounded-md"
              onClick={() => setPopupVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/** popup for delete warning */}
      {warningPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-zinc-950 border border-zinc-500 dark:border-zinc-800 rounded-lg max-w-2xl w-[98%]">
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 py-3 px-3">
            <h2 className="text-sm font-semibold font-inter text-[#333] dark:text-zinc-300">
              Delete {title}
            </h2>
            <button
              onClick={() => setWarningPopup(false)}
              className="hover:bg-zinc-300 dark:hover:bg-zinc-700 p-1 rounded-md"
            >
              <MdClose className="text-[#333] dark:text-zinc-200" />
            </button>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
              <span className="text-2xl font-poppins font-semibold text-[#333] dark:text-zinc-300">
                {selectedComponent?.title}
              </span>
              <span className="text-xl font-openSans font-medium text-zinc-800 dark:text-zinc-400">
                {selectedComponent?.effect}
              </span>
            </div>
            <div className="flex items-center justify-center border-t border-zinc-200 dark:border-zinc-800 py-3 px-3">
              <button 
                onClick={() => handleDeleteBook(selectedComponent._id)}
                className="text-xs border dark:border-zinc-200 rounded-md w-[90%] py-2 lg:py-3 font-openSans font-semibold bg-zinc-900 dark:bg-zinc-200 text-zinc-100 dark:text-black hover:bg-opacity-90 dark:hover:bg-opacity-80"
              >
                I want to delete this {title}
              </button>
            </div>
          </div>
          
        </div>
      )}
    </section>
  );
}

export default ManageComponents;
