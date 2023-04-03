import React from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 mt-14">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
