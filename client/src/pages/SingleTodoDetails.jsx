import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Datepicker from "react-tailwindcss-datepicker";
import { toast } from "react-toastify";

const SingleTodoDetails = () => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");
  const { register, handleSubmit } = useForm();
  const [singleTodo, setSingleTodo] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/to-do/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleTodo(data);
      });
  }, [singleTodo, id]);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const onSubmit = (data) => {
    const todoData = {
      title: data.title,
      details: data.details,
      dueDate: value.startDate,
    };
    fetch(`http://localhost:8080/api/v1/to-do/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Todo Updated Successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        window.location.reload();
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/v1/to-do/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "deleted", isDeleted: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Todo Deleted Successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        navigate("/");
      });
  };
  const handleComplete = (id) => {
    fetch(`http://localhost:8080/api/v1/to-do/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "complete" }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Todo Complete Successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      });
  };

  const handlePermanentDelete = (id) => {
    fetch(`http://localhost:8080/api/v1/to-do/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Todo Deleted Successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        navigate("/");
      });
  };

  return (
    <div>
      <h2 className="text-2xl lg:text-5xl mb-5">My Todo Details</h2>
      <div className="todo-details p-3 border-2 border-gray-200 border-dashed rounded-lg m-2 grid grid-cols-1 gap-5">
        <div className="button">
          {singleTodo?.data?.status === "remaining" && (
            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-3 py-1 rounded dark:bg-yellow-900 dark:text-yellow-300">
              {singleTodo?.data?.status.toUpperCase()}
            </span>
          )}
          {singleTodo?.data?.status === "complete" && (
            <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              {singleTodo?.data?.status.toUpperCase()}
            </span>
          )}
          {singleTodo?.data?.status === "deleted" && (
            <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              {singleTodo?.data?.status.toUpperCase()}
            </span>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
              {edit ? "Edit Your Title" : "Your Title"}
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Todo Title"
              defaultValue={singleTodo?.data?.title}
              disabled={!edit}
              {...register("title", { required: true })}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="details"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
              {edit ? "Edit Your Details" : "Your Details"}
            </label>
            <textarea
              rows="4"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={singleTodo?.data?.details}
              disabled={!edit}
              {...register("details", { required: true })}
              placeholder="Enter Todo Details....."></textarea>
          </div>
          <div className="mb-6 w-1/2">
            <label
              htmlFor="date"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
              {edit ? "Edit Your Due Date" : "Your Due Date"}
            </label>

            {edit ? (
              <Datepicker
                useRange={false}
                asSingle={true}
                value={value}
                onChange={handleValueChange}
              />
            ) : (
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={singleTodo?.data?.dueDate}
                disabled={true}
              />
            )}
          </div>

          <button
            onClick={() => setEdit(!edit)}
            type="button"
            className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 mr-5 mb-2">
            {edit ? "Cancel Edit" : "Edit"}
          </button>
          {edit && (
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-5 mb-2">
              Update
            </button>
          )}
          {singleTodo?.data?.status === "remaining" && edit === false && (
            <button
              onClick={() => handleComplete(singleTodo?.data?._id)}
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Complete
            </button>
          )}
          {edit === false && singleTodo?.data?.isDeleted === false && (
            <button
              onClick={() => handleDelete(singleTodo?.data?._id)}
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mb-2">
              Delete
            </button>
          )}
          {singleTodo?.data?.isDeleted && (
            <button
              onClick={() => handlePermanentDelete(singleTodo?.data?._id)}
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mb-2">
              Permanent Delete
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SingleTodoDetails;
