import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.warn("Password does not match ! Please try again", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
    if (data.password === data.confirmPassword) {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
      toast.success("Account created successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };
  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@gmail.com"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="mb-2">
          <label
            htmlFor="password1"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your password
          </label>
          <input
            placeholder="********"
            type="password"
            id="password1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="mb-2">
          <label
            htmlFor="password2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Confirm password
          </label>
          <input
            placeholder="********"
            type="password"
            id="password2"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="">
          <button className="bg-cyan-400 text-white duration-500 hover:bg-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            <IoLogIn className="mr-2" />
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-4 gap-4">
        Do you have an account?{" "}
        <Link className="underline" to="/login">
          Go to login page
        </Link>
      </div>
    </div>
  );
};

export default RegistrationForm;
