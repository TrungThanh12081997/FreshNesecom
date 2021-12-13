import react from "react";
import "./style.scss";
import CategoryMenu from "./Components/CategoryMenu";
import CategoryItem from "./Components/CategoryItem";
export default function () {
  return (
    <section className="Category">
      <CategoryMenu />
      <CategoryItem />
      <CategoryItem />
    </section>
  );
}
