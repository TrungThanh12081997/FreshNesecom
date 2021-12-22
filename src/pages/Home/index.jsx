import React from "react";
import { IconCategory, IcRightGreen } from "../../components";
import Button from "../../components/Button";
import ItemFooter from "../../components/Footer/components/ItemFooter";
import "../../components/Footer/footer.scss";
import Slider from "../../components/Slider";
import "../Home/home.scss";
import Banner from "./components/Banner";
import Itemproduct from "./components/ItemProduct";

export default function HomePage() {
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
  var itemFarmers = [
    {
      id: 1,
      item: "Carrots",
    },
    {
      id: 2,
      item: "Tomatoes ",
    },
    {
      id: 3,
      item: "Potatoes",
    },
    {
      id: 4,
      item: "Chicken",
    },
    {
      id: 5,
      item: "Pork",
    },
  ];
  var itemSelling = [
    {
      id: 1,
      item: "Kitchen",
    },
    {
      id: 2,
      item: "Meat and fish ",
    },
    {
      id: 3,
      item: "Special nutrition",
    },
    {
      id: 4,
      item: "Pharmacy",
    },
    {
      id: 5,
      item: "Baby",
    },
  ];

  return (
    <div className="homePage">
      <div className="container">
        <section className="cateMenu">
          <div className="categoryWrap">
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
          <Banner />
          <Banner />
        </section>
        <section className="bestFarmers">
          <div className="categoryWrap">
            <ItemFooter
              titleFooter="Best from Farmers"
              nameItem={itemFarmers}
              activeItem="true"
            />
            <div className="btn">
              <a href="#" className="btnCategory">
                More categories
              </a>
              <IconCategory />
            </div>
          </div>
          <Itemproduct />
          <Itemproduct />
          <Itemproduct />
        </section>
        <section className="bestSelling">
          <div className="categoryWrap">
            <ItemFooter
              titleFooter="Best selling products"
              nameItem={itemSelling}
              activeItem="true"
            />
            <div className="btn">
              <a href="#" className="btnCategory">
                More categories
              </a>
              <IconCategory />
            </div>
          </div>
          <Itemproduct />
          <Itemproduct />
          <Itemproduct />
        </section>
      </div>
      <section className="silder">
        <Slider />
      </section>
      <div className="container">
        {" "}
        <section className="headline">
          <div className="titleHeadline">
            <h3>Section Headline</h3>
            <Button
              children="Button"
              icon={<IcRightGreen />}
              type="icon-right"
              background=""
              border="none"
              color="black"
              size="small"
            />
          </div>
          <div className="itemHeadline">
            <Itemproduct />
            <Itemproduct />
            <Itemproduct />
            <Itemproduct />
          </div>
        </section>
      </div>
    </div>
  );
}

// export default function Home() {
// return
//  <div>homePage</div>;
// }
