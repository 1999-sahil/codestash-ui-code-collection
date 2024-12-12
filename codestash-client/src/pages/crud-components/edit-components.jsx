import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CodeMirror, { oneDark } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import Topbar from '../../components/dashboard/topbar'
import { useFetchButtonByIdQuery, useUpdateButtonMutation } from '../../redux/features/buttons/buttonsApi';
import Loading from '../../components/loading';

import { FaPlus } from "react-icons/fa6";
import { AiOutlineLoading } from "react-icons/ai";
import { MdError } from 'react-icons/md';
import axios from 'axios';
import { getBaseUrl } from '../../utils/baseURL';

function EditComponents() {
  const { id } = useParams();
  const [updateButton] = useUpdateButtonMutation();
  const { data: buttonData, isLoading, isError, refetch } = useFetchButtonByIdQuery(id);
  const { register, handleSubmit, setValue, reset } = useForm();
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //console.log("Edit: ", buttonData);

  const onSubmit = async (data) => {
    const updatedButtonData = {
      title: data.title,
      effect: data.effect,
      code: data.code
    };

    try {
      await axios.put(`${getBaseUrl()}/api/ui-components/buttons/button/edit/${id}`, updatedButtonData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Replace with your actual admin token
        },
      });
      toast.success("Component updated successfully!!!")
    } catch (error) {
      console.log("Failed to update button.")
      toast.error("Failed to update component.")
    }
  };

  useEffect(() => {
    //console.log("useeffect data: ", buttonData)
    if (buttonData) {
      setValue("title", buttonData.title);
      setValue("effect", buttonData.effect);
      setValue("code", buttonData.code);
      setCode(buttonData.code || "");
    }
  }, [buttonData, setValue]);

  if (isLoading) return <Loading />
  if (isError) return (
    <div className='w-full h-[100vh] flex items-center justify-center gap-2 font-mukta text-xs font-normal'>
      <MdError className='text-red-500' />
      Error fetching button data
    </div>
  )

  return (
    <div className="bg-white dark:bg-[#0f0f0f] shadow rounded-md border border-zinc-200/50 dark:border-zinc-900 h-[160vh] space-y-4 md:space-y-8">
      <Topbar />
      <div className="w-[90%] mx-auto border border-zinc-200 dark:border-zinc-900 rounded-md">
        <div className="py-4 px-4 border-b border-zinc-200 dark:border-zinc-900 mb-4 space-y-1">
          <h2 className="text-xl md:text-2xl font-bold font-inter text-[#333] dark:text-zinc-200">
            Edit Component
          </h2>
          <h4 className="text-xs md:text-sm font-normal font-mukta text-neutral-500">
            This information will be displayed publicly so be careful what you
            share.
          </h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="px-4">
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
              extensions={[javascript()]}
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
                  Updating
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <FaPlus />
                  Update
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default EditComponents