import React from "react";
import { Link } from "react-router-dom";
import { ImgBanner } from "../../../components/ArrowIcon/index";

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
