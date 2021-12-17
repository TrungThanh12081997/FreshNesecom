import React from "react";
import "../../Footer/footer.scss";

const ItemFooter = ({ titleFooter, nameItem, activeItem }) => {
  let elements = nameItem.map((info, index) => {
    return <div className="nameItem">{info.item}</div>;
  });

  return (
    <>
      <div className="footer">
        <div className="titleFooter">{titleFooter}</div>
        <div className={activeItem ? "category" : ""}>{elements}</div>
      </div>
    </>
  );
};

export default ItemFooter;
