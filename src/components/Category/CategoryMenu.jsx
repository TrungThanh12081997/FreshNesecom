import React from "react";
export function Category() {
    const menu = ["Bakery", "Fruit and vegetables", "Meat and fish", "Drinks", "Kitchen"];
    const item = menu.map(item => {
        return <a href="" className="">{item}</a>
    })
    return (
        <div className="cate__menu">
            <h3 className="cate__title">Category menu</h3>
            <item />
        </div>

    );
}
