import React from "react";
import "../Home/home.scss";
import Category from "./components/Category";
import "../../components/Footer/footer.scss";
import Banner from "./components/Banner";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <div className="homePage">
          <Category />
          <Banner />
        </div>
      </div>
    </>
  );
}
