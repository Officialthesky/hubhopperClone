import React from "react";
import Headercontainer from "../Headercontainer";
import Navigationbar from "../Navigationbar";
import "./index.css";

export default function Header({ toggleSideBar }) {
  return (
    <header>
      <Navigationbar toggleSideBar={toggleSideBar} />
      <Headercontainer/>
    </header>
  );
}
