import classNames from "classnames";
import { themeContext } from "context/context";
import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import SectionProjectItem from "./SectionProjectItem";

export default function SectionProject({ title, para, children, dataItem }) {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;
  return (
    <>
      <section className="transparent py-5 mt-5 d-flex justify-content-center flex-column align-items-center">
        <div className="container">
          <h1
            className={classNames(
              "text-center font-36 fw-500 secondary mb-2",
              darkmode ? "main" : "secondary"
            )}
          >
            {title}
          </h1>
          <p className="text-center para font-14 mt-3 mx-auto">{para}</p>
          <div className="mt-3 pt-0">
            <Row>
              {dataItem?.map((data, index) => {
                return (
                  <Col key={index} lg={4} md={6} sm={12}>
                    <SectionProjectItem
                      image={data.image}
                      title={data.title}
                      para={data.para}
                      link={data.link}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
