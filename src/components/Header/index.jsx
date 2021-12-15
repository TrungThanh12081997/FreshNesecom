import React from "react";
import HeaderContact from "./components/HeaderContact";
import HeaderBottom from "./components/HeaderBottom";
import "../Header/header.scss";
import Button from ".././Button"
import blackLeft from "../ArrowIcon/blackLeft";

export function Header() {
  return (
    <div className="header">
      <div className="container">
        <img src="./img/demo.jpg" alt="" />
        <HeaderContact />
        <HeaderBottom />
        <Button children="mua ngay" icon={<blackLeft />} type="icon-left" background="green" border="bold"
          color="white" size="large" />

      </div>
    </div>
  );
}
