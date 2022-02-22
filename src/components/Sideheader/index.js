import React from "react";

import "./index.css";

export default function Sideheader({ toggleSideBar }) {
  const toggle = () => {
    toggleSideBar();
  };
  return (
    <div className="sideheader-container">
      <div className="sideheader-inner-container">
        <div className="close-sideheader">
        <h1 onClick={toggle}>X</h1>
        </div>
        <div className="sideheader-navbar">
          <ul>
            <li>Create</li>
            <li>Listen</li>
            <li>Products</li>
            <li>Features</li>
            <li>FAQ</li>
            <li>Add/Remove</li>
         </ul>
        </div>
        <div className="sideheader-button">
        <button>How to Create</button>
        </div>
      </div>
    </div>
  );
}
