import React from "react";
import { Link } from "react-router-dom";
import "../../Header/header.scss";
export default function HeaderContact() {
  return (
    <div className="header__contact">
      <div className="header__contact-list">
        <Link to="#" className="header__contact-item active">
          Chat with us
        </Link>
        <Link to="tel:+420336775664" className="header__contact-item">
          +420 336 775 664
        </Link>
        <Link to="mailto:info@freshnesecom.com" className="header__contact-item">
          info@freshnesecom.com
        </Link>
      </div>
      <div className="header__contact-list">
        <Link to="#" className="header__contact-item active m-right">
          Blog
        </Link>
        <Link to="#" className="header__contact-item active  m-right">
          About Us
        </Link>
        <Link to="#" className="header__contact-item active  m-right">
          Careers
        </Link>
        {/* <Link to="/Checkout" className="header__contact-item active  m-right">
          checkout
        </Link> */}
      </div>
    </div>
  );
}
