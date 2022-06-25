import React from "react";
import "./style/loading.css";

const Loading = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="container-fluid w-100 d-flex justify-content-center align-items-center bg__dark"
    >
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
