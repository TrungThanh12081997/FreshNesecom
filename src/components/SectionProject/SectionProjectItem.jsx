import classNames from "classnames";
import React, { useState } from "react";
import "./style.scss";
export default function SectionProjectItem({ image, title, para, link }) {
  return (
    <>
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="flex pointer bg-white shadow flex-column align-items-center text-center project"
      >
        <div className="project-item__img my-4  overflow-hidden position-relative">
          <img src={image} alt="" className="border-5" />
          <div
            className={classNames(
              "hoverBackground underline-none bgGradient position-absolute d-flex justify-content-center align-items-center "
            )}
          >
            <img
              src="https://preview.colorlib.com/theme/personal/img/xpreview.png.pagespeed.ic.XNQyxcrj4p.webp"
              alt=""
              className=""
            />
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          className="main text-decoration-none font-18 my-2 fw-600 project-title pointer"
        >
          {title}
        </a>
        <h3 className=" font-14 my-4 h-auto px-3 pb-3">{para}</h3>
      </div>
    </>
  );
}
