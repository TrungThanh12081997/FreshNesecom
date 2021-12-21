import React from "react";
<<<<<<< HEAD
import { ImgBanner } from "../../../components/ArrowIcon/index";
import Button from "../../../components/Button";
import { IcRightGreen } from "../../../components";

const Banner = (props) => {
  return (
    <div className="bannerWrap">
      <ImgBanner />
      <div className="banner">
=======
import { ImgBanner, WhiteLeft } from "../../../components/ArrowIcon/index";
import Button from "../../../components/Button";

const Banner = (props) => {
  return (
    <>
      <div className="banner">
        <ImgBanner />
        <div className="bannerWrap">
>>>>>>> 311e8f2c15ef7043a419b0383129efbdc252a37b
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
<<<<<<< HEAD
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
=======
    </>
>>>>>>> 311e8f2c15ef7043a419b0383129efbdc252a37b
  );
};

export default Banner;
