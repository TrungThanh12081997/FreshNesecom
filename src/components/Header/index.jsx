import React from "react";
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
}
