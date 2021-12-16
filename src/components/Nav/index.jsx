import React from "react";
import "./style.scss";
import NavItem from "./components/NavItem"
export function Nav() {
    const navArr = ["Bakery", "Fruit and vegetables", "Meat and fish", "Drinks", "Kitchen", "Special nutrition", "Baby", "Pharmacy"]
    return (
        <div className="nav">
            <div className="container">
                <div className="flex">

                    <NavItem title={navArr} />
                    {/* <NavItem title="Bakery" />
                    <NavItem title="Fruit and vegetables" />
                    <NavItem title="Meat and fish" />
                    <NavItem title="Drinks" />
                    <NavItem title="Kitchen" />
                    <NavItem title="Special nutrition" />
                    <NavItem title="Baby" />
                    <NavItem title="Pharmacy" /> */}
                </div>
            </div>
        </div>
    );
}
