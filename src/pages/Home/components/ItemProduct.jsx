import React from "react";
import Button from "../../../components/Button";

const Itemproduct = () => {
  return (
    <div className="itemProductWrap">
      <div className="itemProduct">
        <div className="itemImg"></div>
        <div className="productText">
          <h4>Product Title</h4>
          <p>Space for a small product description </p>
          <div className="price">
            <h3>1.48 USD</h3>
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
  );
};

export default Itemproduct;
