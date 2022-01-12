import React from "react";
import "./style.scss"
export default function TitleBilling(props) {
  return (
    <div className="titleBill">
      <h2>{props.title}</h2>
      <div className="title">
        <p>{props.des}</p>
        <div className="step">{props.step}</div>
      </div>
    </div>
  );
}
