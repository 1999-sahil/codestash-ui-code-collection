import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CodeMirror, { oneDark } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from '@uiw/react-codemirror';

import Topbar from "../../components/dashboard/topbar";

import { FaPlus } from "react-icons/fa6";
import { AiOutlineLoading } from "react-icons/ai";
import { useAddButtonMutation } from "../../redux/features/buttons/buttonsApi";


function AddNewComponent() {
  const [errorMessage, setErrorMessage] = useState("");
  const [code, setCode] = useState("")
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const [addButton, { isLoading, isError }] = useAddButtonMutation();

  const extensions = [
      javascript(),
      EditorView.lineWrapping
    ];

  const onSubmit = async (data) => {
    //console.log(data);

    const newButtonData = { ...data };

    try {
      await addButton(newButtonData).unwrap();
      toast.success("Component added successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
      reset();
    } catch (error) {
      setErrorMessage("Please provide valid credentials!");
      toast.error("All fields are mandatory. Please try again!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const onSubmitGPT = async (data) => {
    console.log(data);
    console.log("Token", localStorage.getItem("token"));

    try {
      const response = await fetch("http://localhost:5000/api/ui-components/buttons/create-button", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Replace with your actual admin token
        },
        body: JSON.stringify({
          title: data.title,
          effect: data.effect,
          tag: data.tag,
          code: code,
        }),
      });
  
      if (response.status === 403) {
        throw new Error("Access denied. Admin privileges required.");
      }
  
      if (!response.ok) {
        throw new Error("Failed to create button.");
      }
  
      const result = await response.json();
      toast.success("Button created successfully!");
      console.log(result);
    } catch (error) {
      setErrorMessage(error.message);
      toast.error(error.message);
      console.log(error);
    }
  };
  

  return (
    <div className="bg-white dark:bg-[#0f0f0f] shadow rounded-md border border-zinc-200/50 dark:border-zinc-900 min-h-screen space-y-4 md:space-y-8">
      <Topbar />
      <div className="w-[90%] mx-auto border border-zinc-200 dark:border-zinc-900 rounded-md">
        <div className="py-4 px-4 border-b border-zinc-200 dark:border-zinc-900 mb-4 space-y-1">
          <h2 className="text-xl md:text-2xl font-bold font-inter text-[#333] dark:text-zinc-200">
            Add new Component
          </h2>
          <h4 className="text-xs md:text-sm font-normal font-mukta text-neutral-500">
            This information will be displayed publicly so be careful what you
            share.
          </h4>
        </div>
        <form onSubmit={handleSubmit(onSubmitGPT)} className="px-4">
          <div className="mb-4">
            <label className="block mb-2 text-sm lg:text-base font-inter font-medium text-neutral-600 dark:text-neutral-300">
              Title
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              name="title"
              id="text"
              placeholder="your component title here"
              className="appearance-none font-inter font-normal text-sm border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow dark:text-zinc-100 dark:border-neutral-800 dark:bg-neutral-900"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm lg:text-base font-inter font-medium text-neutral-600 dark:text-neutral-300">
              Effect
            </label>
            <input
              {...register("effect", { required: true })}
              type="text"
              name="effect"
              id="text"
              placeholder="your component title here"
              className="appearance-none font-inter font-normal text-sm border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow dark:text-zinc-200 dark:border-neutral-800 dark:bg-neutral-900"
            />
          </div>
          {/**
           * <div className="mb-4">
            <label className="block mb-2 text-sm lg:text-base font-inter font-medium text-neutral-600 dark:text-neutral-300">
              Tag
            </label>
            <input
              {...register("tag", { required: true })}
              type="text"
              name="tag"
              id="text"
              placeholder="your component title here"
              className="appearance-none font-inter font-normal text-sm border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow dark:text-zinc-100 dark:border-neutral-800 dark:bg-neutral-900"
            />
          </div>
           */}

          <div className="mb-4">
            <label className="block mb-2 text-sm lg:text-base font-inter font-medium text-neutral-600 dark:text-neutral-300">
              Code
            </label>
            <CodeMirror
              value={code}
              height="200px"
              autoFocus={false}
              placeholder={`/*
    @codestash-ui. All rights reserved.
    Write your code here.
*/`}
              extensions={extensions}
              theme={oneDark}
              onChange={(value) => setCode(value)}
              className="border border-neutral-500 dark:border-neutral-700 decoration-transparent text-xs lg:text-sm outline-none rounded"
            />
          </div>

          {errorMessage && <p className='text-rose-500 font-normal font-mukta text-xs italic mb-3'>{errorMessage}</p>}

          <div className="mb-4">
            <button type="submit" className="flex items-cente justify-center gap-2 text-center w-full md:w-1/4 font-mukta font-medium text-xs lg:text-sm border py-2 rounded-md bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-800 hover:bg-opacity-90 dark:hover:bg-opacity-90">
              {isLoading ? (
                <span className="flex items-center gap-1">
                  <AiOutlineLoading className="animate-spin" />
                  Add
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <FaPlus />
                  Add
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddNewComponent;
