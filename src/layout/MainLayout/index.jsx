import React from "react";
import { Link, Outlet } from "react-router-dom";

import Button from "../../components/Button";


export default function MainLayout() {
  return (
    <>
      {/* <Header /> */}

      <div id="main-content">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}
