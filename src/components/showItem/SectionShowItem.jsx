import classNames from "classnames";
import { themeContext } from "context/context";
import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import ItemCard from "./ItemCard";
import "./style.scss";
export default function SectionShowItem({ title, para, children, dataItem }) {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;
  return (
    <>
      <section className=" py-5 my-5 d-flex justify-content-center  flex-column align-items-center">
        <div className="container">
          <h1
            className={classNames(
              "text-center font-36 fw-500  mb-2",
              darkmode ? "main" : "secondary"
            )}
          >
            {title}
          </h1>
          <p className="text-center para font-14 my-4 mx-auto ">{para}</p>
          <Row>
            {dataItem?.map((data, index) => {
              return (
                <Col key={index} lg={4} md={6} sm={12} className="my-5 my-md-0">
                  <ItemCard
                    image={data.image}
                    title={data.title}
                    para={data.para}
                  />
                </Col>
              );
            })}
          </Row>
          {children}
        </div>
      </section>
    </>
  );
}
