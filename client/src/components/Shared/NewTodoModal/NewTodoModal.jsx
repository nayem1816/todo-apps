import React, { useState } from "react";
import { Modal } from "flowbite-react";
import Datepicker from "react-tailwindcss-datepicker";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import { useNavigate } from "react-router-dom";

const NewTodoModal = ({ show, setShow }) => {
  const [user, loading] = useAuthState(auth);
  const [value, setValue] = useState("");
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const onClose = () => {
    setShow(false);
  };

  if (loading) return <Loading />;

  const onSubmit = (data) => {
    const todoData = {
      userName: user.displayName,
      userEmail: user.email,
      title: data.title,
      details: data.details,
      dueDate: value.startDate,
    };
    fetch("https://todo-apps-neon.vercel.app/api/v1/to-do", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
        navigate.push("/");
        onClose();
      });
  };

  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>Create New Todo</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Todo Title"
              {...register("title", { required: true })}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="details"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Details
            </label>
            <textarea
              rows="4"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("details", { required: true })}
              placeholder="Enter Todo Details....."></textarea>
          </div>
          <div className="mb-6">
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Due Date
            </label>
            <Datepicker
              useRange={false}
              asSingle={true}
              value={value}
              onChange={handleValueChange}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default NewTodoModal;
