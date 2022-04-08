import React, { useEffect, useState } from "react";
import { IconStar } from "../../components";
import Button from "../../components/Button";
import { message } from "antd";

import productService from "../../services/productService";
import TextField from "../Checkout/components/TextField";
import { ProductItem } from "../Home/components/ProductItem";
import { Slider } from "antd";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import "../../components/Pagination/index";
import { useQuery } from "react-query";
import Paginate from "../../components/Pagination/index";
import { useRef } from "react";
export default function Product() {
  const dispatch = useDispatch();
  const { productDefault, productInfo, productPrice, productSearch } =
    useSelector((store) => store.product);
  const [fetching, setFetching] = useState(true);
  const [product, setProduct] = useState();
  const [brand, setBrand] = useState(true);
  const [brand1, setBrand1] = useState(true);
  const [brand2, setBrand2] = useState(true);
  const [brand3, setBrand3] = useState(true);
  const [brand4, setBrand4] = useState(true);
  const [number, setNumber] = useState({
    minPrice: 19999110,
    maxPrice: 85000000000,
  });

  const minPriceRef = useRef(null);
  const maxPriceRef = useRef(null);
  const res = useQuery({
    queryKey: "respon",
    queryFn: () => productService.getProductDefault(),
  });

  const resProductPrice = useQuery({
    queryKey: "responPrice",
    queryFn: () => productService.getProductMinMax(number),
  });
  useEffect(() => {
    setFetching(true);
    setProduct(res?.data?.data?.data);
    setFetching(false);
    dispatch({
      type: "PRODUCT_DEFAULT",
      payload: res?.data?.data?.data,
    });
  }, [res?.data]);

  var onChange = (name) => (ev) => {
    setNumber({
      ...number,
      [name]: ev.currentTarget.value,
    });
  };
  const handleSearchPrice = async (e) => {
    e.preventDefault();

    // const products = await productService.getProductMinMax(number);

    if (resProductPrice?.length === 0) {
      message.error("Sản phẩm không được tìm thấy");
    } else {
      dispatch({
        type: "PRODUCT_PRICE",
        payload: resProductPrice?.data?.data?.data,
      });
    }
  };
  const mostSearch = ["Khuyến Mãi", "Beauty ", "Game", "Du Lịch", "Xe Máy"];
  const mostBranch = ["Honda", "Iphone", "Xiaomi", "Yamaha", "Oppo"];

  const handleReset = (e) => {
    e.preventDefault();
    const minPriceInput = minPriceRef.current;
    const maxPriceInput = maxPriceRef.current;
    // document.querySelector(".min__input").setAttribute("value", 0);
    minPriceInput.value = 0;
    maxPriceInput.value = document
      .querySelector(".ant-slider-handle.ant-slider-handle-2")
      .getAttribute("aria-valuemax");
    // );
    setNumber({
      minPrice: minPriceInput.value,
      maxPrice: maxPriceInput.value,
    });
  };
  const quickSearch = async (e) => {
    e.preventDefault();
    const tagsProduct = e.target.innerText;
    const quickSearchProduct = await productService.searchNameProduct(
      tagsProduct
    );

    dispatch({
      type: "PRODUCT_SEARCH",
      payload: quickSearchProduct?.data?.data,
    });
  };
  return (
    <>
      <section className="view">
        <div className="container">
          <div className="view__top"></div>
          <div className="view__middle">
            <form className="view__middle-left">
              <div className="form__introduce">
                <h2 className="form__introduce-title">
                  Most search (Click to Search )
                </h2>
                {mostSearch.map((e, index) => {
                  return (
                    <p
                      key={index}
                      className="form__introduce-item"
                      onClick={quickSearch}
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
              <div className="form__introduce">
                <h2 className="form__introduce-title">Brand</h2>
                {mostBranch.map((e, index) => {
                  return (
                    <p key={index} className="form__introduce-item">
                      <input
                        type="checkbox"
                        id="check"
                        onChange={async (e) => {
                          const tag = e.target.nextElementSibling.innerHTML;
                          const quickSearchProduct =
                            await productService.searchNameProduct(tag);
                          console.log(quickSearchProduct?.data?.data);
                          e.target.checked = true;
                          dispatch({
                            type: "PRODUCT_SEARCH",
                            payload: quickSearchProduct?.data?.data,
                          });
                          e.target.checked = false;
                        }}
                      />
                      <label for="check" className="">
                        {e}
                      </label>
                    </p>
                  );
                })}
                {/* <p className="form__introduce-item">
                  <input
                    type="checkbox"
                    id="check1"
                    checked={!brand1}
                    onChange={async () => {
                      if (brand1 === true) {
                        setBrand1(false);
                        await message.error(
                          "hiện không hỗ trợ tìm sản phẩm theo brand"
                        );
                        setBrand1(true);
                      } else {
                        setBrand1(true);
                      }
                      console.log(brand);
                    }}
                  />
                  <label for="check1" className="">
                    Filtre by brand item
                  </label>
                </p>
                <p className="form__introduce-item">
                  <input
                    checked={!brand2}
                    onChange={async () => {
                      if (brand2 === true) {
                        setBrand2(false);
                        await message.error(
                          "hiện không hỗ trợ tìm sản phẩm theo brand"
                        );
                        setBrand2(true);
                      } else {
                        setBrand2(true);
                      }
                    }}
                    type="checkbox"
                    id="check2"
                  />
                  <label for="check2" className="">
                    Filtre by brand item
                  </label>
                </p>
                <p className="form__introduce-item">
                  <input
                    checked={!brand3}
                    onChange={async () => {
                      if (brand3 === true) {
                        setBrand3(false);
                        await message.error(
                          "hiện không hỗ trợ tìm sản phẩm theo brand"
                        );
                        setBrand3(true);
                      } else {
                        setBrand3(true);
                      }
                    }}
                    type="checkbox"
                    id="check3"
                  />
                  <label for="check3" className="">
                    Filtre by brand item
                  </label>
                </p>
                <p className="form__introduce-item">
                  <input
                    checked={!brand4}
                    onChange={async () => {
                      if (brand4 === true) {
                        setBrand4(false);
                        await message.error(
                          "hiện không hỗ trợ tìm sản phẩm theo brand"
                        );
                        setBrand4(true);
                      } else {
                        setBrand4(true);
                      }
                    }}
                    type="checkbox"
                    id="check4"
                  />
                  <label for="check4" className="">
                    Filtre by brand item
                  </label>
                </p> */}
              </div>
              <div className="form__introduce">
                <h2 className="form__introduce-title">Rating</h2>
                <div className="rating__level">
                  <p className="rating__level-item">
                    <input
                      type="checkbox"
                      className="rating__level-item-input"
                      onChange={(e) => {
                        if ((e.target.checked = true)) {
                          message.error(
                            "hiện không hỗ trợ tìm sản phẩm theo brand"
                          );
                          e.target.checked = false
                        }
                      }}
                    />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                  </p>
                  <p className="rating__level-item">
                    <input
                      type="checkbox"
                      className="rating__level-item-input"
                      onChange={(e) => {
                        if ((e.target.checked = true)) {
                          message.error(
                            "hiện không hỗ trợ tìm sản phẩm theo brand"
                          );
                          e.target.checked = false
                        }
                      }}
                    />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                  </p>
                  <p className="rating__level-item">
                    <input
                      type="checkbox"
                      className="rating__level-item-input"
                      onChange={(e) => {
                        if ((e.target.checked = true)) {
                          message.error(
                            "hiện không hỗ trợ tìm sản phẩm theo brand"
                          );
                          e.target.checked = false
                        }
                      }}
                    />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                  </p>
                  <p className="rating__level-item">
                    <input
                      type="checkbox"
                      className="rating__level-item-input"
                      onChange={(e) => {
                        if ((e.target.checked = true)) {
                          message.error(
                            "hiện không hỗ trợ tìm sản phẩm theo brand"
                          );
                          e.target.checked = false
                        }
                      }}
                    />
                    <IconStar />
                    <IconStar />
                  </p>
                  <p className="rating__level-item">
                    <input
                      type="checkbox"
                      className="rating__level-item-input"
                      onChange={(e) => {
                        if ((e.target.checked = true)) {
                          message.error(
                            "hiện không hỗ trợ tìm sản phẩm theo brand"
                          );
                          e.target.checked = false
                        }
                      }}
                    />
                    <IconStar />
                  </p>
                </div>
              </div>
              <div className="form__introduce">
                <h2 className="form__introduce-title">Price</h2>
                <div className="range-slider">
                  <Slider
                    range
                    autoFocus={true}
                    onChange={(e) => {
                      document
                        .querySelector(".max__input")
                        .setAttribute(
                          "value",
                          document
                            .querySelector(
                              ".ant-slider-handle.ant-slider-handle-2"
                            )
                            .getAttribute("aria-valuenow")
                        );
                      document
                        .querySelector(".min__input")
                        .setAttribute(
                          "value",
                          document
                            .querySelector(
                              ".ant-slider-handle.ant-slider-handle-1"
                            )
                            .getAttribute("aria-valuenow")
                        );

                      setNumber({
                        minPrice: document
                          .querySelector(
                            ".ant-slider-handle.ant-slider-handle-1"
                          )
                          .getAttribute("aria-valuenow"),
                        maxPrice: document
                          .querySelector(
                            ".ant-slider-handle.ant-slider-handle-2"
                          )
                          .getAttribute("aria-valuenow"),
                      });
                    }}
                    min={0}
                    max={100000000}
                    step={[10]}
                    defaultValue={[20000000, 85000000]}
                  />
                </div>
                <div className="min__max">
                  <div className="min__max-item">
                    <p className="">min</p>

                    <input
                      type="number"
                      placeholder="0"
                      onChange={onChange("minPrice")}
                      className="min__max-input min__input"
                      ref={minPriceRef}
                    />
                  </div>
                  <div className="min__max-item">
                    <p className="">max</p>

                    <input
                      type="number"
                      placeholder="000"
                      onChange={
                        onChange("maxPrice")
                        // document.querySelector(".ant-slider-handle.ant-slider-handle-2").setAttribute("aria-valuenow", e.target.value);
                        // console.log(document.querySelector(".ant-slider-handle.ant-slider-handle-2").getAttribute("aria-valuenow"))
                      }
                      className="min__max-input max__input"
                      ref={maxPriceRef}
                    />
                  </div>
                </div>
              </div>
              <div className="view__intro-btn">
                <Button
                  onClick={handleSearchPrice}
                  children="Apply"
                  size="small"
                  background="green"
                  color="white"
                  border="bold"
                />
                <Button
                  children="Reset"
                  size="small"
                  background="white"
                  color="gray"
                  border="white"
                  onClick={handleReset}
                ></Button>
              </div>
            </form>
            <div className="view__middle-right">
              <div className="itemProductList">
                {typeof productPrice === "undefined" &&
                typeof productSearch === "undefined"
                  ? productDefault?.map((product, index) => {
                      const { name, price, short_description, thumbnail_url } =
                        product;
                      return (
                        <ProductItem
                          key={index}
                          name={name}
                          price={price}
                          short_description={short_description}
                          thumbnail_url={thumbnail_url}
                        />
                      );
                    })
                  : productPrice?.map((product, index) => {
                      const { name, price, short_description, thumbnail_url } =
                        product;
                      return (
                        <ProductItem
                          key={index}
                          name={name}
                          price={price}
                          short_description={short_description}
                          thumbnail_url={thumbnail_url}
                        />
                      );
                    })}
                {productSearch &&
                  productSearch?.map((product, index) => {
                    const { name, price, short_description, thumbnail_url } =
                      product;
                    return (
                      <ProductItem
                        key={index}
                        name={name}
                        price={price}
                        short_description={short_description}
                        thumbnail_url={thumbnail_url}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="mid">
            {/* <Pagination defaultCurrent={1} total={500} /> */}
            <Paginate />
          </div>
        </div>
      </section>
    </>
  );
}
