import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../../../components/Button";
import productService from "../../../services/productService";

const Itemproduct = () => {

  // const [product, setProduct] = useState()



  // useEffect(async () => {
  //   const res = await productService.getProduct()
  //   setProduct(res?.data);

  // }, [])
  const [product, setProduct] = useState()
  useEffect(async () => {
    let res = await productService.getProduct()
    const resData = res.data
    // console.log(resData)
    setProduct(resData.slice(0, 3))
  }, [])

  return <>
    <div className="itemProductList">
      {
        product?.map((productItem, index) => {
          const { thumbnail_url, name, short_description, price } = productItem
          return (


            <div key={index} className="itemProductWrap">
              <div className="itemProduct">
                <div className="itemImg">
                  <img src={thumbnail_url} alt="" className="" />
                </div>
                <div className="productText">
                  <h4>{name}</h4>
                  <p>{short_description} </p>
                  <div className="price">
                    <h3>{`${price} VND`}</h3>
                    <Button
                      children="Buy nows"
                      background="green"
                      border="bold"
                      color="white"
                      size="small"
                    />
                  </div>
                </div>
              </div>
            </div>

          )
        }
        )
      }

    </div >
  </>


}

export default Itemproduct;
