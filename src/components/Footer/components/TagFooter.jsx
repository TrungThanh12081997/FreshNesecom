import React from "react";
import "../../Footer/footer.scss";

export default function TagFooter({ nameTag }) {
  return (
    <>
      <div className="tags">
        <p>{nameTag}</p>
      </div>
    </>
  );
}
