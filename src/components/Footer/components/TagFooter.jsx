import React from "react";
import "../../Footer/footer.scss";

export default function TagFooter({ nameTag }) {
  //   let elementTags = nameTag.map((item, index) => {
  //     return <div className="nameItem">{item.nameTags}</div>;
  //   });
  return (
    <>
      <div className="tags">
        <p>{nameTag}</p>
      </div>
    </>
  );
}
