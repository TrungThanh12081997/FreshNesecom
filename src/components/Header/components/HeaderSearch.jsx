import Search from "antd/lib/transfer/search";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import productService from "../../../services/productService";
import "../../Header/header.scss";
import { message } from 'antd';

// import "../../assets/img";
export default function HeaderSearch() {
  const handleHistory = () => {
    const his = document.querySelector(".header__select-option");

    // const cur = document.querySelector(".header__select-content p")

    his.classList.toggle("active");
  };
  const changeCur = function (e) {
    document.querySelector(".header__select-option").classList.remove("active");

    const cur = document.querySelector(".header__select-content p");
    const his = e.currentTarget.textContent;
    e.currentTarget.innerHTML = cur.textContent;
    document.querySelector(".header__select-content p").innerHTML = his;
  };

  const { setForm, form } = useForm({})
  const onChange = name => ev => {
    setForm({
      ...form,
      [name]: ev.target.value
    })

  }

  const dispatch = useDispatch();
  const { productInfo, productSearch } = useSelector(store => store.product)
  const handleSearch = async (e, index) => {
    e.preventDefault();



    const products = await productService.searchNameProduct(form.name);

    if (products?.data.length === 0) {
      message.error("Sản phẩm không được tìm thấy")
    } else {
      message.success("Sản phẩm đã được tìm thấy")
      dispatch({
        type: "PRODUCT_SEARCH",
        payload: products?.data?.data,
      })
      console.log(productSearch);
    }




  }

  return (
    <form className="header__search">
      <div className="header__select">
        <div onClick={handleHistory} className="header__select-content">
          <p className="">All categories</p>

          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.81348 1.53326L4.55348 4.27326C4.67838 4.39743 4.84735 4.46712 5.02348 4.46712C5.1996 4.46712 5.36857 4.39743 5.49348 4.27326L8.16014 1.6066"
              stroke="#6A983C"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="bevel"
            />
          </svg>
        </div>
        {/* <div className="header__select-option">
          <div className="select__option">
            <p onClick={changeCur} className="">
              Most popular
            </p>
          </div>

          <div className="select__option">
            <p onClick={changeCur} className="">
              Everything
            </p>
          </div>
        </div> */}
      </div>
      <input onChange={onChange("name")} className="header__input" />
      <button
        onClick={handleSearch}
        className="header__find">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.19303 10.4333C10.7704 10.4333 12.8597 8.34394 12.8597 5.76661C12.8597 3.18928 10.7704 1.09995 8.19303 1.09995C5.61571 1.09995 3.52637 3.18928 3.52637 5.76661C3.52637 8.34394 5.61571 10.4333 8.19303 10.4333Z"
            stroke="#151515"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="bevel"
          />
          <path
            d="M4.81319 9.24002L1.68652 12.3667"
            stroke="#151515"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="bevel"
          />
        </svg>
      </button>
    </form>
  );
}
