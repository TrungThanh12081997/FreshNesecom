import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../../../components/Button";
import productService from "../../../services/productService";

const Itemproduct = () => {

  const [product, setProduct] = useState()



  useEffect(async () => {
    const res = await productService.getProduct()
    setProduct(res?.data);

  }, [])

  return <>

    {
      product?.map((productItem) => {
        const { thumbnail_url, name, short_description, price } = productItem
        return (

          <div className="itemProductWrap">
            <div className="itemProduct">
              <div className="itemImg">
                <img src={thumbnail_url} alt="" className="" />
              </div>
              <div className="productText">
                <h4>{name}</h4>
                <p>{short_description} </p>
                <div className="price">
                  <h3>{price}</h3>
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
      })
    }

  </>


}

export default Itemproduct;
