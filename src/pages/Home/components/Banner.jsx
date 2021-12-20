import React from "react";
import { ImgBanner, WhiteLeft } from "../../../components/ArrowIcon/index";
import Button from "../../../components/Button";

const Banner = (props) => {
  return (
    <>
      <div className="banner">
        <ImgBanner />
        <div className="bannerWrap">
        <p className="subFocus">Banner subfocus</p>
          <h3>Space for heading</h3>
        </div>
        <div className="btnBanner">
         <Button children="Button" icon={<WhiteLeft />} type="icon-left" background="green" border="bold"
          color="white" size="large" /> 
        </div>
        
      </div>
      <div className="banner">
        <ImgBanner />
        <div className="bannerWrap">
          <p className="subFocus">Banner subfocus</p>
          <h3>Space for heading</h3>
        </div>
      </div>
    </>
  );
};

export default Banner;
