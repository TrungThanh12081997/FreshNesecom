import React from "react";
import "./style.scss";
export default function Loading() {
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="position-fixed loading d-flex justify-content-center align-items-center z-11"
    >
      <div className="lds-hourglass "></div>
    </div>
  );
}
