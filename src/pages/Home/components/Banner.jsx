import React from "react";
import { ImgBanner } from "../../../components/ArrowIcon/index";
import Button from "../../../components/Button";
import { IcRightGreen } from "../../../components";

const Banner = (props) => {
  return (
    <div className="bannerWrap">
      <ImgBanner />
      <div className="banner">
        <p className="subFocus">Banner subfocus</p>
        <h3>Space for heading</h3>
      </div>
      <Button
        children="Read rec epies"
        icon={<IcRightGreen />}
        type="icon-right"
        background=""
        border="bold"
        color="black"
        size="middle"
      />
    </div>
  );
};

export default Banner;
