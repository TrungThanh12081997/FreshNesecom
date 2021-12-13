import React from "react";
import HeaderSearch from "./HeaderSearch";
export default function HeaderContact() {
  return (
    <div className="header__contact">

      <div className="header__contact-list">
        <a href="#" className="header__contact-item active">Chat with us</a>
        <a href="tel:+420336775664" className="header__contact-item">+420 336 775 664</a>
        <a href="mailto:info@freshnesecom.com" className="header__contact-item">info@freshnesecom.com</a>
      </div>
      <div className="header__contact-list">
        <a href="#" className="header__contact-item active">Blog</a>
        <a href="#" className="header__contact-item active">About Us</a>
        <a href="#" className="header__contact-item active">Careers</a>
      </div>


    </div>
  );
}
