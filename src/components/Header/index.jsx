import React from "react";
<<<<<<< HEAD
import "./header.scss";

export function Header() {
  return (
    <header>
      <div className="container"></div>
    </header>
  );
=======
import "./style.scss";
import HeaderContact from "./HeaderContact"
import HeaderBottom from "./HeaderBottom";
export function Header() {
    return (
        <div className="header">
            <div className="container-fluid">
                <HeaderContact />
                <HeaderBottom />
            </div>
        </div>
    );
>>>>>>> master
}
