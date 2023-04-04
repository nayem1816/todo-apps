import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const TodoDetails = ({ todo }) => {
  const handleComplete = (id) => {
    fetch(`https://todo-apps-neon.vercel.app/api/v1/to-do/${id}`, {
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
        window.location.reload();
      });
  };

  const handleDelete = (id) => {
    fetch(`https://todo-apps-neon.vercel.app/api/v1/to-do/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "deleted", isDeleted: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error("Todo Deleted Successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        window.location.reload();
      });
  };

  const handlePermanentDelete = (id) => {
    fetch(`https://todo-apps-neon.vercel.app/api/v1/to-do/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error("Todo Deleted Successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        window.location.reload();
      });
  };

  return (
    <div className="border px-4 py-2 rounded-lg block lg:flex lg:justify-between items-center gap-5">
      <div className="flex gap-6 items-center">
        <input
          onClick={() => handleComplete(todo?._id)}
          id="checkbox-2"
          type="checkbox"
          disabled={todo?.status === "complete" || todo?.status === "deleted"}
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <div className="">
          <Link to={`/todo-details/${todo?._id}`}>
            <h3 className="text-md">{todo?.title.slice(0, 20)}...</h3>
          </Link>
          <p className="text-xs text-gray-400">
            <span>Due Date: </span>
            {todo?.dueDate}
          </p>
          <p className="text-xs text-gray-400">
            <span>Status: </span>

            {todo?.status === "remaining" && (
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                {todo?.status}
              </span>
            )}
            {todo?.status === "complete" && (
              <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                {todo?.status}
              </span>
            )}
            {todo?.status === "deleted" && (
              <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                {todo?.status}
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="flex gap-5 justify-start mt-5 lg:mt-0">
        {todo?.status !== "deleted" && (
          <Link to={`/todo-details/${todo?._id}`}>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
              Edit
            </span>
          </Link>
        )}
        {todo?.status !== "deleted" && (
          <Link onClick={() => handleDelete(todo?._id)} to="">
            <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
              Delete
            </span>
          </Link>
        )}
        {todo?.status === "deleted" && (
          <Link onClick={() => handlePermanentDelete(todo?._id)} to="">
            <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
              Permanent Delete
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TodoDetails;
