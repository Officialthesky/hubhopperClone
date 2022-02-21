import React from "react";

import "./index.css";

export default function Sideheader({ toggleSideBar }) {
  const toggle = () => {
    toggleSideBar();
  };
  return (
    <div className="sideheader-container">
      <div className="sideheader-inner-container">
        <h1 onClick={toggle}>close</h1>
      </div>
    </div>
  );
}
