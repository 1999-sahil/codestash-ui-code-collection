import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { IoIosClose } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '../context/auth-context'

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const { loginUser, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    //console.log(data)

    try {
      await loginUser(data.email, data.password);
      toast.success("You have been logged in successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
      navigate("/");
    } catch (error) {
      setErrorMessage("Please provide valid credentials!");
      toast.error("Login failed. Please try again!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await signInWithGoogle();
      toast.success("You have been logged in successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please try again!", {
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

            <h2 className='font-inter font-semibold text-[#111] dark:text-white my-5'>Please Login to continue</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label className='block mb-1 text-sm font-mukta font-medium dark:text-neutral-200'>Email</label>
                    <input
                      {...register("email", { required: true })}
                      type='email'
                      name='email'
                      id='email'
                      placeholder='your @email address'
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
            <p className='align-baseline mb-4 flex items-center gap-1 text-sm font-mukta text-zinc-500 dark:text-zinc-400'>
                Don't have an account? Please
                <Link to='/register' className='text-black dark:text-white underline underline-offset-2 font-medium'>
                  register
                </Link>
            </p>

            {/** google sign-in */}
            <div>
                <button
                  onClick={handleGoogleSignin}
                  className='flex flex-wrap items-center gap-2 justify-center border w-full rounded-md py-1.5 font-openSans text-sm font-medium text-neutral-800 dark:text-neutral-300 border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                >
                    <FcGoogle />
                    Continue with Google
                </button>
            </div>

            <p className='text-center text-xs my-4 text-neutral-500 dark:text-neutral-400 font-poppins'>
                @2024 codestash-ui. All rights reserved.
            </p>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Login