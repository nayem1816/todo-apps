import React from "react";

const TotalCard = ({ title, number, Icon }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex gap-5 items-center">
      <Icon className="w-16 h-16 mb-1 text-gray-500 dark:text-gray-400" />
      <div className="">
        <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <h2 className="mb-3 font-normal text-2xl text-gray-500 dark:text-gray-400">
          {number}
        </h2>
      </div>
    </div>
  );
};

export default TotalCard;
