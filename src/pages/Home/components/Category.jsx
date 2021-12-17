import React from "react";
import { Link } from "react-router-dom";
import { IconCategory } from "../../../components/ArrowIcon/index";

import ItemFooter from "../../../components/Footer/components/ItemFooter";
import "../../../components/Footer/footer.scss";
// import btnCategory from "../../../assets/img/icon/ic-category-right.svg";

export default function Category({ activeItem }) {
  var itemCategory = [
    {
      id: 1,
      item: "Bakery",
    },
    {
      id: 2,
      item: "Fruit and vegetables ",
    },
    {
      id: 3,
      item: "Meat and fish",
    },
    {
      id: 4,
      item: "Drinks",
    },
    {
      id: 5,
      item: "Kitchen",
    },
  ];

  return (
    <>
      <div className="container">
        <ItemFooter
          titleFooter="Category menu"
          nameItem={itemCategory}
          activeItem="true"
        />
        <div className="btn">
          <a href="#" className="btnCategory">
            More categories
          </a>
          <IconCategory />
        </div>
      </div>
    </>
  );
}
