import React from "react";
import HeaderContact from "./components/HeaderContact";
import HeaderBottom from "./components/HeaderBottom";
import "../Header/header.scss";

export function Header() {
  return (
    <div className="header">
      <div className="container-fluid">
        <HeaderContact />
        <HeaderBottom />
      </div>
    </div>
  );
}
