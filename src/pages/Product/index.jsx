import ColumnGroup from 'antd/lib/table/ColumnGroup'
import React, { useEffect, useState } from 'react'
import { IconStar, Nav } from '../../components'
import Button from '../../components/Button'
import { message } from "antd"
import classnames from 'classnames'
import productService from '../../services/productService'
import TextField from '../Checkout/components/TextField'
import { ProductItem } from '../Home/components/ProductItem'
import { Slider, Switch } from 'antd';
import "./style.scss"
import { useDispatch, useSelector } from 'react-redux'
export default function Product() {
    const dispatch = useDispatch();
    const { productDefault, productInfo, productPrice, productSearch } = useSelector(store => store.product);
    const [fetching, setFetching] = useState(true)
    const [product, setProduct] = useState()
    const [brand, setBrand] = useState(true)
    const [brand1, setBrand1] = useState(true)
    const [brand2, setBrand2] = useState(true)
    const [brand3, setBrand3] = useState(true)
    const [brand4, setBrand4] = useState(true)
    const [number, setNumber] = useState("")
    useEffect(async () => {

        setFetching(true)
        const res = await productService.getProductDefault();
        setProduct(res.data)
        setFetching(false)

        dispatch({
            type: "PRODUCT_DEFAULT",
            payload: res.data
        })
    }, [])
    console.log(productSearch);

    // if (fetching) return "..loading"
    var onChange = (name) => (ev) => {



        setNumber({
            ...number,
            [name]: ev.currentTarget.value
        });
        console.log(number);



    }



    const handleSearchPrice = async (e) => {
        e.preventDefault();

        const products = await productService.getProductMinMax(number);
        console.log(products.data);
        if (products.data.length === 0) {
            message.error("Sản phẩm không được tìm thấy")
        } else {
            dispatch({
                type: "PRODUCT_PRICE",
                payload: products.data,
            })


        }
    }



    // console.log(document.querySelector(".ant-slider-handle ant-slider-handle-2").innerText)
    return (
        <>
            {/* <Nav /> */}
            <section className='view'>
                <div className="container">

                    <div className="view__top">

                    </div>
                    <div className="view__middle">
                        <form className="view__middle-left">
                            <div className="form__introduce">
                                <h2 className="form__introduce-title">
                                    Categories
                                </h2>
                                <p className="form__introduce-item">Category</p>
                                <p className="form__introduce-item">Category</p>
                                <p className="form__introduce-item">Category</p>
                                <p className="form__introduce-item">Category</p>

                            </div>
                            <div className="form__introduce">
                                <h2 className="form__introduce-title">
                                    Brand
                                </h2>
                                <p className="form__introduce-item">
                                    <input type="checkbox" id="check"
                                        checked={
                                            !brand
                                        }
                                        onChange={async () => {
                                            if (brand === true) {
                                                setBrand(false);
                                                await message.error("hiện không hỗ trợ tìm sản phẩm theo brand")
                                                setBrand(true);
                                            } else {
                                                setBrand(true);

                                            }
                                            console.log(brand)
                                        }}
                                    />
                                    <label for="check" className="">
                                        Filtre by brand item
                                    </label>
                                </p>
                                <p className="form__introduce-item">
                                    <input type="checkbox" id="check1"
                                        checked={
                                            !brand1
                                        }
                                        onChange={async () => {
                                            if (brand1 === true) {
                                                setBrand1(false);
                                                await message.error("hiện không hỗ trợ tìm sản phẩm theo brand")
                                                setBrand1(true);
                                            } else {
                                                setBrand1(true);

                                            }
                                            console.log(brand)
                                        }}
                                    />
                                    <label for="check1" className="">
                                        Filtre by brand item
                                    </label>
                                </p>
                                <p className="form__introduce-item">
                                    <input
                                        checked={
                                            !brand2
                                        }
                                        onChange={async () => {
                                            if (brand2 === true) {
                                                setBrand2(false);
                                                await message.error("hiện không hỗ trợ tìm sản phẩm theo brand")
                                                setBrand2(true);
                                            } else {
                                                setBrand2(true);

                                            }

                                        }}
                                        type="checkbox" id="check2" />
                                    <label for="check2" className="">
                                        Filtre by brand item
                                    </label>
                                </p>
                                <p className="form__introduce-item">
                                    <input
                                        checked={
                                            !brand3
                                        }
                                        onChange={async () => {
                                            if (brand3 === true) {
                                                setBrand3(false);
                                                await message.error("hiện không hỗ trợ tìm sản phẩm theo brand")
                                                setBrand3(true);
                                            } else {
                                                setBrand3(true);

                                            }

                                        }}
                                        type="checkbox" id="check3" />
                                    <label for="check3" className="">
                                        Filtre by brand item
                                    </label>
                                </p>
                                <p className="form__introduce-item">
                                    <input
                                        checked={
                                            !brand4
                                        }
                                        onChange={async () => {
                                            if (brand4 === true) {
                                                setBrand4(false);
                                                await message.error("hiện không hỗ trợ tìm sản phẩm theo brand")
                                                setBrand4(true);
                                            } else {
                                                setBrand4(true);

                                            }

                                        }}
                                        type="checkbox" id="check4" />
                                    <label for="check4" className="">
                                        Filtre by brand item
                                    </label>
                                </p>

                            </div>
                            <div className="form__introduce">
                                <h2 className="form__introduce-title">
                                    Rating
                                </h2>
                                <div className="rating__level">
                                    <p className="rating__level-item">
                                        <input type="checkbox" className="rating__level-item-input" />
                                        <IconStar />
                                        <IconStar />
                                        <IconStar />
                                        <IconStar />
                                        <IconStar />

                                    </p>
                                    <p className="rating__level-item">
                                        <input type="checkbox" className="rating__level-item-input" />
                                        <IconStar />
                                        <IconStar />
                                        <IconStar />
                                        <IconStar />


                                    </p>
                                    <p className="rating__level-item">
                                        <input type="checkbox" className="rating__level-item-input" />
                                        <IconStar />
                                        <IconStar />
                                        <IconStar />


                                    </p>
                                    <p className="rating__level-item">
                                        <input type="checkbox" className="rating__level-item-input" />
                                        <IconStar />
                                        <IconStar />


                                    </p>
                                    <p className="rating__level-item">
                                        <input type="checkbox" className="rating__level-item-input" />
                                        <IconStar />


                                    </p>
                                </div>
                            </div>
                            <div className="form__introduce">
                                <h2 className="form__introduce-title">
                                    Price
                                </h2>
                                <div className="range-slider">
                                    <Slider range
                                        autoFocus={true}
                                        onChange={(e) => {
                                            document.querySelector(".max__input").setAttribute("value", document.querySelector(".ant-slider-handle.ant-slider-handle-2").getAttribute("aria-valuenow"))
                                            document.querySelector(".min__input").setAttribute("value", document.querySelector(".ant-slider-handle.ant-slider-handle-1").getAttribute("aria-valuenow"))
                                            setNumber({
                                                minPrice: document.querySelector(".ant-slider-handle.ant-slider-handle-1").getAttribute("aria-valuenow"),
                                                maxPrice: document.querySelector(".ant-slider-handle.ant-slider-handle-2").getAttribute("aria-valuenow")
                                            })
                                            console.log(number);
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
                                            placeholder='0'
                                            onChange={
                                                onChange("minPrice")
                                            }
                                            className="min__max-input min__input" />
                                    </div>
                                    <div className="min__max-item">
                                        <p className="">max</p>

                                        <input type="number"
                                            placeholder='000'
                                            onChange={
                                                onChange("maxPrice")
                                                // document.querySelector(".ant-slider-handle.ant-slider-handle-2").setAttribute("aria-valuenow", e.target.value);
                                                // console.log(document.querySelector(".ant-slider-handle.ant-slider-handle-2").getAttribute("aria-valuenow"))
                                            }
                                            className="min__max-input max__input" />
                                    </div>

                                </div>



                            </div >
                            <div className="view__intro-btn">
                                <Button
                                    onClick={handleSearchPrice}
                                    children="Apply"

                                    size="small"
                                    background='green'
                                    color='white'
                                    border="bold"
                                />
                                <Button
                                    children="Reset"

                                    size="small"
                                    background='white'
                                    color='gray'
                                    border="white"
                                ></Button>


                            </div>



                        </form>
                        <div className="view__middle-right">
                            <div className="itemProductList">

                                {typeof productPrice === "undefined" && typeof productSearch === "undefined" ?
                                    productDefault?.map(
                                        product => {
                                            const { name, price, short_description, thumbnail_url } = product
                                            return (<ProductItem
                                                name={name} price={price} short_description={short_description} thumbnail_url={thumbnail_url}



                                            />)
                                        }
                                    ) :
                                    productPrice?.map(
                                        product => {
                                            const { name, price, short_description, thumbnail_url } = product
                                            return (<ProductItem
                                                name={name} price={price} short_description={short_description} thumbnail_url={thumbnail_url}



                                            />)
                                        }
                                    )
                                }
                                {productSearch &&
                                    productSearch?.map(
                                        product => {
                                            const { name, price, short_description, thumbnail_url } = product
                                            return (<ProductItem
                                                name={name} price={price} short_description={short_description} thumbnail_url={thumbnail_url}



                                            />)
                                        }
                                    )

                                }



                            </div>

                            {/* <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem /> */}
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}
