import React from "react";
import "../../Checkout/checkout.scss";

const TextField = ({ label, value, helperText, ...ref }) => {
  return (
    <div className="fieldDetail">
      <div className="label">{label}</div>
      <input type="text" value={value} {...ref} />
      <p className="error-text">{helperText}</p>
    </div>
  );
};

export default TextField;
