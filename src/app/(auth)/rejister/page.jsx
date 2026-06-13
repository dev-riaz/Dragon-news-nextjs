"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const handleRegisterFunc = async (data) => {
    const { email, name, photo, password } = data;

    const { data:res, error} = await authClient.signUp.email({
      name: name, // required
      email:email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });
    console.log(res,error);
    if(error){
      alert(error.message)
    }
    if(res){
      alert("SignUp Successful")
    }
    
  };

  return (
    <div className="bg-base-200">
      <div className="w-10/12 mx-auto h-full py-8 flex justify-center items-center ">
        <form
          onSubmit={handleSubmit(handleRegisterFunc)}
          className="fieldset bg-white border-base-300 rounded-box w-xl border py-14 px-20"
        >
          <h2 className="text-center py-4 text-2xl">Register your account</h2>
          <hr className="my-4 border-base-300" />

          <label className="label text-xl font-semibold">Your Name</label>
          <input
            type="text"
            className="input w-full bg-base-200 font-semibold"
            {...register("name", { required: true })}
            placeholder="Enter your name"
          />

          <label className="label text-xl font-semibold">Photo URL</label>
          <input
            type="text"
            className="input w-full bg-base-200 font-semibold"
            {...register("url", { required: true })}
            placeholder="Enter Photo URL"
          />

          <label className="label text-xl font-semibold">Email address</label>
          <input
            type="email"
            className="input w-full bg-base-200 font-semibold"
            {...register("email", { required: "Please Enter the Email ?" })}
            placeholder="Enter your email address"
          />

          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <label className="label text-xl font-semibold">Password</label>
          <input
            type="password"
            className="input w-full bg-base-200 font-semibold"
            {...register("password", {
              required: "Please Enter the password ?",
            })}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <button className="btn btn-neutral mt-4 text-white">Register</button>
          {/* <p className="text-center font-semibold">
            Dont’t Have An Account ?{" "}
            <Link href={"/rejister"} className="text-red-500">
              Register
            </Link>
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
