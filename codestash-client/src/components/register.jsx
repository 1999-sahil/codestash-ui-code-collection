import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import { useAuth } from "../context/auth-context";

function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const { registerUser, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Register new user
  const onSubmit = async (data) => {
    console.log(data);

    try {
      await registerUser(data.email, data.password);
      alert("User registered successfully");
    } catch (error) {
      setErrorMessage("Please provide valid credentials!");
    }
  };

  const handleGoogleSignin = async() => {
    try {
      await signInWithGoogle();
      alert("Login with google successful!");
      navigate("/");
    } catch (error) {
      alert("Sign up failed");
    }
  };

  return (
    <div className="h-[calc(100vh - 120px)] flex justify-center items-center">
      <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40" />

      <div className="z-50 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-md relative w-[90%] max-w-sm mx-auto shadow-md px-6 py-4">
        <Link to="/" className="absolute right-2">
          <IoIosClose className="text-3xl text-black/70 dark:text-white/70" />
        </Link>

        <h2 className="font-inter font-semibold text-[#111] dark:text-white my-5">
          New User? Create your Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-mukta font-medium dark:text-neutral-200">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="your @email address"
              className="appearance-none font-mukta text-sm border rounded w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow dark:text-zinc-100 dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-1 text-sm font-mukta font-medium dark:text-neutral-200">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
              className="appearance-none font-mukta text-sm border rounded w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow  dark:text-zinc-100 dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>
          {errorMessage && (
            <p className="text-rose-500 font-mukta text-xs italic mb-3">
              {errorMessage}
            </p>
          )}
          <div className="mb-4">
            <button className="text-center text-xs lg:text-sm w-full font-mukta font-medium border py-1.5 rounded-md bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-800 hover:bg-opacity-90 dark:hover:bg-opacity-90">
              Register
            </button>
          </div>
        </form>
        <p className="align-baseline mb-4 flex items-center gap-1 text-sm font-mukta text-zinc-500 dark:text-zinc-400">
          Already have an account?
          <Link
            to="/login"
            className="text-black dark:text-white underline underline-offset-2 font-medium"
          >
            Login here
          </Link>
        </p>

        {/** google sign-in */}
        <div>
          <button
            onClick={handleGoogleSignin}
            className="flex flex-wrap items-center gap-2 justify-center border w-full rounded-md py-1.5 font-openSans text-sm font-medium text-neutral-800 dark:text-neutral-300 border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <FcGoogle />
            Continue with Google
          </button>
        </div>

        <p className="text-center text-xs my-4 text-neutral-500 dark:text-neutral-400 font-poppins">
          @2024 codestash-ui. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Register;
