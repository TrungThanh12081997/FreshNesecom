import react from "react";
import "./style.scss";
import CategoryMenu from "./components/CategoryMenu";
import CategoryItem from "./components/CategoryItem";
export default function () {
  return (
    <section className="Category">
      <CategoryMenu />
      <CategoryItem />
      <CategoryItem />
    </section>
  );
}
