import React from "react";
import "./style.scss";
import btnCategory from "../../assets/img/icon/ic-category-right.svg";
import imgBanner from "../../assets/img/Banner.jpg";

export function WhiteRight() {
  return (
    <div className="iright">
      <svg
        className="iright"
        width="16"
        height="16"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5332 8.18661L4.2732 5.44661C4.39737 5.3217 4.46706 5.15274 4.46706 4.97661C4.46706 4.80049 4.39737 4.63152 4.2732 4.50661L1.60654 1.83995"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLineJoin="bevel"
        />
      </svg>
    </div>
  );
}
export function WhiteLeft() {
  return (
    <svg
      className="ileft"
      width="16"
      height="16"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.46658 1.81339L1.72658 4.55339C1.60241 4.6783 1.53271 4.84727 1.53271 5.02339C1.53271 5.19952 1.60241 5.36848 1.72658 5.49339L4.39324 8.16006"
        stroke="white"
        strokewidth="2.5"
        strokelinecap="round"
        strokelinejoin="bevel"
      />
    </svg>
  );
}
export function GreenRight() {
  return (
    <svg
      className="iright"
      width="16"
      height="16"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5332 8.1866L4.2732 5.4466C4.39737 5.32169 4.46706 5.15273 4.46706 4.9766C4.46706 4.80048 4.39737 4.63151 4.2732 4.5066L1.60654 1.83994"
        stroke="#6A983C"
        strokewidth="2.5"
        strokeLineCap="round"
        strokeLineJoin="bevel"
      />
    </svg>
  );
}
export function GreenLeft() {
  return (
    <svg
      className="ileft"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.46658 4.81332L6.72658 7.55332C6.60241 7.67823 6.53271 7.8472 6.53271 8.02332C6.53271 8.19945 6.60241 8.36842 6.72658 8.49332L9.39324 11.16"
        stroke="#6A983C"
        strokeWidth="2.5"
        strokeLineCap="round"
        strokeLineJoin="bevel"
      />
    </svg>
  );
}
export function BlackLeft() {
  return (
    <svg
      className="ileft"
      width="16"
      height="16"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.46658 1.81339L1.72658 4.55338C1.60241 4.67829 1.53271 4.84726 1.53271 5.02338C1.53271 5.19951 1.60241 5.36848 1.72658 5.49338L4.39324 8.16005"
        stroke="#151515"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="bevel"
      />
    </svg>
  );
}
export function BlackRight() {
  return (
    <svg
      className="iright"
      width="16"
      height="16"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5332 8.1866L4.2732 5.4466C4.39737 5.32169 4.46706 5.15273 4.46706 4.9766C4.46706 4.80048 4.39737 4.63151 4.2732 4.5066L1.60654 1.83994"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLineCap="round"
        strokeLineJoin="bevel"
      />
    </svg>
  );
}

export function IconCategory() {
  return <img src={btnCategory} alt="" />;
}
export function ImgBanner() {
  return <img src={imgBanner} alt="" />;
}

