import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.scss";
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import telegram from "../../assets/img/telegram-app.svg";
import linkedin from "../../assets/img/linkedin.svg";

import phone from "../../assets/img/phone.svg";
import classNames from "classnames";
export default function Footer() {
  const dataSocial = [
    {
      img: facebook,
      link: "https://www.facebook.com/KoiL0ver2019",
    },

    {
      img: linkedin,
      link: "https://www.linkedin.com/in/quan-trung-thanh-58878a227/",
    },
    {
      img: phone,
      link: "tel:0822433379",
    },
  ];
  return (
    <>
      <div className="footer bg-black">
        <div className="container">
          <Row className="d-flex justify-content-between">
            <Col lg={4} sm={12} data-aos="fade-down " className="my-3 my-lg-0">
              <h1 className="white font-18 mb-4">About me</h1>
              <p className="font-14 mb-3">
                This blog is create to contact works and save my memory in my
                career path &#128151;
              </p>
              <p className="font-14 mb-3">
                This template is made with love by |{" "}
                <strong href="" className="main pointer position-relative  ">
                  Quan Trung Thành
                </strong>
              </p>
            </Col>
            <Col lg={4} sm={12} data-aos="fade-up">
              <h1 className="white font-18 mb-4">Contact me for work</h1>
              <p className="font-14 mb-3">
                Please contact me follow these information
              </p>
              <div className="d-flex">
                {dataSocial?.map((social, index) => {
                  const { link, img } = social;
                  return (
                    <a
                    key={index}
                      href={link}
                      target="_blank"
                      className={classNames(
                        "pointer ",
                        index === 0 ? "animate-top" : ""
                      )}
                    >
                      <img src={img} className="me-3 " alt="" />
                    </a>
                  );
                })}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
