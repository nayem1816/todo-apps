import React from "react";
import { Label, Checkbox } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { toast } from "react-toastify";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    toast.error("The email address or password is incorrect", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
    });
  }
  if (loading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Link className="underline" to="/forget">
            Forget password
          </Link>
        </div>
        <div className="">
          <button className="bg-cyan-400 text-white duration-500 hover:bg-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            <IoLogIn className="mr-2" />
            Login
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-4 gap-4">
        Do not have an account?{" "}
        <Link className="underline" to="/register">
          Create account
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
