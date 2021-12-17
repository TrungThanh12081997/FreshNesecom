import React from "react";
import { ImgBanner } from "../../../components/ArrowIcon/index";

const Banner = (props) => {
  return (
    <div className="Banner">
      <div className="imgBanner">
        <ImgBanner />
      </div>

      <div className="bannerWrap">
        <p className="subFocus">Banner subfocus</p>
        <h3>Space for heading</h3>
      </div>
    </div>
  );
};

export default Banner;
