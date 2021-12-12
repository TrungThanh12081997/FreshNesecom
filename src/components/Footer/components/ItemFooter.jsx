import React from "react";
import "../../Footer/footer.scss";

const ItemFooter = ({ titleFooter, nameItem }) => {
  let elements = nameItem.map((info, index) => {
    return <div className="nameItem">{info.item}</div>;
  });

  return (
    <>
      <div className="demo">
        <div className="titleFooter">{titleFooter}</div>
        {elements}
      </div>
    </>
  );
};

export default ItemFooter;
