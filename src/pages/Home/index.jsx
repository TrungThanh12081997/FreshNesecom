
import React, { useState, useEffect } from 'react';
import { GreenRight, IconCategory, IcRightGreen, WhiteRight } from "../../components";
import Button from "../../components/Button";
import ItemFooter from "../../components/Footer/components/ItemFooter";
import "../../components/Footer/footer.scss";
import Slider from "../../components/Slider";
import "../Home/home.scss";
import Banner from "./components/Banner";
import Itemproduct from "./components/ItemProduct";
import BlogPost from "../../components/BlogPost";
import { Link } from "react-router-dom";
import AuthReducer from "../../store/authenReducer";
import { useDispatch, useSelector } from "react-redux"
import store from "../../store";
import userService from "../../services/userService"
import { ProductItem } from './components/ProductItem';
import Product from '../Product';
import productService from '../../services/productService';

export default function HomePage() {
  const { productInfo, productSearch, productDefault } = useSelector(store => store.product)
  const dispatch = useDispatch()
  const { login, stateLogin } = useSelector(store => store.auth)

const {count } = useSelector(store=>store.count)
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
  useEffect(async () => {


    const res = await productService.getProductDefault();


    dispatch({
      type: "PRODUCT_DEFAULT",
      payload: res.data
    })
  }, [])




  const getUser = async () => {

    const res = await userService.getInfo();
    if (res) {
      dispatch({
        type: "GET_INFO",
        payload: res.data

      })
    }

  }
  


  return (<>

<Button children="Count +" icon={<WhiteRight />} type="icon-right" background="green" border="none"
                color="black" size="small" 
                  onClick={()=>{
                    dispatch({
                      type:"COUNT"
                    })
                  }}
                /> count : {count}
    {typeof productSearch === "Array" && <Product />}
    <div div className="homePage" >
      <div className="container">

        <section className="cateMenu">
          {/* <button onClick={login}
          >click </button> */}

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
          </div><div className="bannerList">

            <Banner />
            <Banner />
          </div>
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
          <div className="itemProductList">
            {
              typeof productSearch === "undefined" ?
                productDefault?.map(e => {
                  const { name, price, short_description, thumbnail_url } = e;
                  return <ProductItem
                    name={name}
                    price={price}
                    short_description={short_description}
                    thumbnail_url={thumbnail_url}

                  />
                }) :
                productSearch?.map(e => {
                  const { name, price, short_description, thumbnail_url } = e;
                  return <ProductItem
                    name={name}
                    price={price}
                    short_description={short_description}
                    thumbnail_url={thumbnail_url}

                  />


                })}
          </div>

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

        </section>
      </div>
      <section className="silder">
        {/* <Slider /> */}
      </section>
      <div className="container">
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

        </section>
        {/* <section className="headline">
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

          </div>
        </section> */}
        <section className="Blog">
          <BlogPost />

        </section>
      </div>
    </div>
  </>
  );
}

// export default function Home() {
// return
//  <div>homePage</div>;
// }
