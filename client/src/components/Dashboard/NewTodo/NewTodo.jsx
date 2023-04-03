import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const NewTodo = () => {
  return (
    <Link to="">
      <div className="flex justify-between items-center border py-2 px-5 rounded-lg">
        <h2 className="text-gray-500">Add New Todo...</h2>
        <div className="flex items-center gap-5">
          <MdOutlineDateRange className="w-8 h-8 text-gray-500" />
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center">
            Add
          </button>
        </div>
      </div>
    </Link>
  );
};

export default NewTodo;
