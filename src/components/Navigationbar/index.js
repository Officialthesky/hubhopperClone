import React from "react";
import "./index.css";

export default function Navigationbar() {
  const navlistitems = [
    { listitems: "Create" },
    { listitems: "Listen" },
    { listitems: "Products" },
    { listitems: "Features" },
    { listitems: "FAQ" },
    { listitems: "Add/Remove" },
  ];

  return (
    <div className="navigation-bar">
      <div className="logo">
        <h1>hubhopper</h1>
      </div>

      <div className="nav-bar">
        <ul>
          {navlistitems.map((navlistitem, index) => {
            return <li key={index}>{navlistitem.listitems}</li>;
          })}
          <button>How to create</button>
        </ul>
      </div>
    </div>
  );
}


