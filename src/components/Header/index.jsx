import React from "react";
import HeaderContact from "./components/HeaderContact";
import HeaderBottom from "./components/HeaderBottom";
import "../Header/header.scss";
import Button from ".././Button"
import { GreenLeft, WhiteLeft } from "../ArrowIcon/index";

// import { GreenLeft } from "../ArrowIcon";

export function Header() {
  return (
    <div className="header">
      <div className="container">
        <img src="./img/demo.jpg" alt="" />
        <HeaderContact />
        <HeaderBottom />
        {/* <Button children="Button" icon={<WhiteLeft />} type="icon-left" background="green" border="bold"
          color="white" size="large" /> */}

      </div>
    </div>
  );
}
//// có lỗi ngay terminal coi cài file button giống chú k giùm t đi t import btn vo cái header test đó

// button cho nào đây

