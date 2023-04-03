import React from "react";
import loadingGif from "../../assets/images/loading.gif";

const Loading = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="container mx-auto flex justify-center items-center">
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
