import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { IoIosClose } from 'react-icons/io'
import { getBaseUrl } from '../utils/baseURL';


function AdminLogin() {
    const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    //console.log(data)

    try {
      const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
        headers: {
            'Content-Type': 'application/json',
        }
      });

      const auth = response.data;
      //console.log(auth);

      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
            localStorage.removeItem("token");
            toast.error("Token has been expires! Please Login again", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            })
        }, 3600 * 1000);
      }

      toast.success("Admin logged in successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage("Please provide valid credentials!");
      toast.error("Invalid Credentials!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40' />

        <div className='z-50 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-md relative w-[90%] max-w-sm mx-auto shadow-md px-6 py-4'>
            <Link to='/' className='absolute right-2'>
                <IoIosClose className='text-3xl text-black/70 dark:text-white/70' />
            </Link>

            <h2 className='flex flex-col font-inter font-semibold text-[#111] dark:text-white my-5'>
                Welcome back, #Admin
                <span className='text-zinc-500 font-medium text-sm'>Please Login to continue</span>
            </h2>
                
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label className='block mb-1 text-sm font-mukta font-medium dark:text-neutral-200'>Username</label>
                    <input
                      {...register("username", { required: true })}
                      type='text'
                      name='username'
                      id='username'
                      placeholder='enter your username'
                      className='appearance-none font-mukta text-sm border rounded w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow dark:text-zinc-100 dark:border-zinc-700 dark:bg-zinc-900'
                    />
                </div>
                <div className='mb-5'>
                    <label className='block mb-1 text-sm font-mukta font-medium dark:text-neutral-200'>Password</label>
                    <input
                      {...register("password", { required: true })}
                      type='password'
                      name='password'
                      id='password'
                      placeholder='enter your password'
                      className='appearance-none font-mukta text-sm border rounded w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow  dark:text-zinc-100 dark:border-zinc-700 dark:bg-zinc-900'
                    />
                </div>
                {errorMessage && <p className='text-rose-500 font-mukta text-xs italic mb-3'>{errorMessage}</p>}
                <div className='mb-4'>
                    <button className='text-center w-full font-mukta font-medium text-xs lg:text-sm border py-1.5 rounded-md bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-800 hover:bg-opacity-90 dark:hover:bg-opacity-90'>
                        Login
                    </button>
                </div>
            </form>

            <p className='text-center text-xs my-4 text-neutral-500 dark:text-neutral-400 font-poppins'>
                @2024 codestash-ui. All rights reserved.
            </p>
        </div>
        <ToastContainer />
    </div>
  )
}

export default AdminLogin