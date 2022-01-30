import React from "react";
import "./index.css";
import Creatorbodyboxes from "../Creatorbodyboxes";
import Creatorplatformcontainer from "../Creatorplatformcontainer";
import Downloadappcontainer from "../Downloadappcontainer";
import Creatorbodyheading from "../Creatorbodyheading";

export default function Creatorbody() {
  return (
    <div className="creator-body">
      <Creatorbodyheading></Creatorbodyheading>
      <Creatorbodyboxes></Creatorbodyboxes>
      <Creatorplatformcontainer></Creatorplatformcontainer>
     <Downloadappcontainer></Downloadappcontainer>
    </div>
  );
}
