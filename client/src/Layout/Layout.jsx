import React from "react";
import Navbar from "./Navbar/Navbar";
import Aside from "./Aside/Aside";
import Body from "./Body/Body";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Aside />
      <Body />
    </div>
  );
};

export default Layout;
