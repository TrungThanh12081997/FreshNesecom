import CategoryItem from "./components/CategoryItem";
import CategoryMenu from "./components/CategoryMenu";
import "./style.scss";
export default function () {
  return (
    <section className="Category">
      <CategoryMenu />
      <CategoryItem />
      <CategoryItem />
    </section>
  );
}
