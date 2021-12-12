import react from "react";
import "./style.scss";
import CategoryMenu from "./CategoryMenu";
import CategoryItem from "./CategoryItem";
export default function () {
    return (
        <section className="Category">
            <CategoryMenu />
            <CategoryItem />
            <CategoryItem />
        </section>
    )
}