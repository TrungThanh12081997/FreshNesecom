import React from "react";
import "./style.scss";
export default function SliderItem({ dataContent }) {
  const { img, para, position, name, link } = dataContent;

  return (
    <>
      <div
        className="d-flex slider bg-white py-5 px-4 shadow border-5 mx-3 "
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
      >
        <div className="slider-img border50 me-5 ms-2">
          <img src={img} alt="" className="w-full h-full" />
        </div>
        <div className="slider-content">
          <p className="font-14  mb-3">{para}</p>
          <h1 className="font-18 mb-1 secondary fw-600">{position}</h1>
          <h3 className="font-14  ">{name}</h3>
        </div>
      </div>
    </>
  );
}
