import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";
import Button from "../../components/Button";
import Navigator from "../../components/Navigator";

export default function MainLayout(children) {
  return (
    <>
      <Header />
      <Navigator />
      <div id="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
