import React from "react";
import Headercontainer from "../Headercontainer";
import Navigationbar from "../Navigationbar";
import "./index.css";

export default function Header() {
  return (
    <header>
      <Navigationbar></Navigationbar>
      <Headercontainer></Headercontainer>
    </header>
  );
}
