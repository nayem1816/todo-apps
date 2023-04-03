import React from "react";
import { Link } from "react-router-dom";
import {
  MdSpaceDashboard,
  MdRestore,
  MdRestoreFromTrash,
  MdDoneAll,
} from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { RiTodoLine } from "react-icons/ri";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

const Aside = () => {
  const logout = () => {
    signOut(auth);
  };
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <MdSpaceDashboard className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/all-todo"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <RiTodoLine className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">All To-Do</span>
            </Link>
          </li>
          <li>
            <Link
              to="/remaining-todo"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <MdRestore className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Remaining</span>
            </Link>
          </li>
          <li>
            <Link
              to="/completed-todo"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <MdDoneAll className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Completed</span>
            </Link>
          </li>
          <li>
            <Link
              to="/deleted-todo"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <MdRestoreFromTrash className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Deleted</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={logout}
              to="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <FaSignOutAlt className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
