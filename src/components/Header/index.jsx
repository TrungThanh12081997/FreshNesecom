import React, { useContext } from "react";

import Logo from "../../assets/img/logo.png";
import "./style.scss";
import sun from "assets/img/sun.png";
import moon from "assets/img/moon.png";
import { themeContext } from "context/context";

const Header = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;

  const handleSetDarkMode = () => {
    theme.dispatch({ type: "toggle" });
  };
  console.log(darkmode);

  return (
    <>
      <div className=" header shadow   py-4">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="header_img">
            <img src={Logo} alt="" className="" />
          </div>
          <div
            class="header_button pointer "
            style={{ width: "35px", height: "35px" }}
            onClick={handleSetDarkMode}
          >
            <img
              src={darkmode ? sun : moon}
              style={{ width: "100%", height: "100%" }}
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
