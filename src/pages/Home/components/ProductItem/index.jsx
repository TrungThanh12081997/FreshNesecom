import React from 'react'
import Button from '../../../../components/Button'

export const ProductItem = ({ name, price, short_description, thumbnail_url, index }) => {
    return (
        <>




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




        </>
    )
}
