import React from "react";
import "./style.scss";
import NavItem from "./NavItem"
export function Nav() {
    return (
        <div className="nav">
            <div className="container-fluid">
                <div className="flex">

                    <NavItem title="Bakery" />
                    <NavItem title="Fruit and vegetables" />
                    <NavItem title="Meat and fish" />
                    <NavItem title="Drinks" />
                    <NavItem title="Kitchen" />
                    <NavItem title="Special nutrition" />
                    <NavItem title="Baby" />
                    <NavItem title="Pharmacy" />
                </div>
            </div>
        </div>
    );
}
