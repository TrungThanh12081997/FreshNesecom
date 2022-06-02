import React from "react";
// import "./style.scss";
export default function ItemCard({ image, title, para }) {
  return (
    <div className=" my-2 my-lg-2 bg-white d-flex flex-column align-items-center pointer shadow item">
      <div data-aos="flip-down" className="item-card__img mt-5">
        <img src={image} className="z-10"></img>
      </div>
      <div className="item-card__info text-center">
        <h1 className="z-10 font-18 main mt-5 mb-4">{title}</h1>
        <p className="font-14 z-10 mt-0 mx-3 mb-3 ">{para}</p>
      </div>
    </div>
  );
}
