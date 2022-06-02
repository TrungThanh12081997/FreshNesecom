import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.scss";
export default function SectionCount({ data }) {
  return (
    <div className="z-10 w-full countSection  bgGradient">
      <div className="container">
        <Row>
          {data?.map((data, index) => {
            return (
              <Col key={index} lg={3} md={6} sm={12} className="my-2 my-lg-0">
                <h1
                  className=" font-36 white text-center mb-3 font-700 "
                  data-aos="zoom-in"
                >
                  {data.count}
                </h1>
                <p className=" font-14 white mb-0 text-center" data-aos="zoom-in">
                  {data.title}
                </p>
              </Col>
            );
          })}
        </Row>
        ;
      </div>
    </div>
  );
}
