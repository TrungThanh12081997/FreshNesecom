import React from "react";

export default function TitleBilling(props) {
  return (
    <div className="titleBill">
      <div className="title">
        <h2>{props.title}</h2>
        <p>{props.des}</p>
      </div>
      <div className="step">{props.step}</div>
    </div>
  );
}
