import React, { useContext } from "react";
import classNames from "classnames";
import { Col, Row } from "react-bootstrap";
import cv from "../../assets/img/cv.quantrungthanh.pdf";
import download from "assets/img/download.gif";
import { themeContext } from "context/context";
export default function SectionIntro({
  title,
  fontTitle,
  name,
  para,
  buttonLabel,
  backgroundMain,
  reverse,
  img,
  link,
}) {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;
  return (
    <div className=" transparent">
      <Row
        className={classNames(
          "d-flex justify-content-between intro container my-5 py-5 transparent",
          reverse ? "flex-row-reverse" : "your-element-selector"
        )}
      >
        <Col lg={5} sm={12}>
          <div
            data-aos={reverse ? "fade-left" : "fade-right"}
            className={classNames("intro-text pt-5  my-5 ")}
          >
            <h3
              className={
                "z-10 letter-spacing-2 font-14 fw-600  uppercase animateText"
              }
            >
              {title}
            </h3>
            <h1
              className={classNames(
                "z-10 py-4 fw-600",
                `font-${fontTitle}`,
                darkmode ? "main" : "secondary"
              )}
            >
              {name}
            </h1>
            <p className="z-10 mb-4 font-14">{para}</p>
            {buttonLabel && (
              <a
                href={cv}
                className="z-10 buttonLabel w-fit text-decoration-none  align-items-center justify-content-center bgGradient d-flex uppercase px-4 py-3 shadow-hover uppercase  fw-500 py-2"
                download
              >
                <button className=" transparent white outline-none border-none ">
                  {buttonLabel}
                </button>
                <img
                  src={download}
                  style={{ width: "23px", height: "18px" }}
                  className="ps-1"
                />
              </a>
            )}
          </div>
        </Col>
        <Col lg={5} sm={12} className="mt-5 pt-3">
          <div data-aos="flip-left" className="z-10 intro-img shadow border-5">
            <img src={img} style={{ width: "100%", height: "100%" }} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
