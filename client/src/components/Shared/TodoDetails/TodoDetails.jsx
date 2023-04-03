import React from "react";
import { Link } from "react-router-dom";

const TodoDetails = () => {
  return (
    <div className="border px-4 py-2 rounded-lg flex justify-between items-center gap-5">
      <div className="flex gap-6 items-center">
        <input
          id="checkbox-2"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <h3 className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h3>
      </div>
      <div className="flex gap-5">
        <Link to="">
          <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
            Complete
          </span>
        </Link>
        <Link to="">
          <span class="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
            Delete
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TodoDetails;
