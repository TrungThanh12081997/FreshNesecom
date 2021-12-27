import React from "react";
import classnames from "classnames";
import "./style.scss";

export default function Button({
  children,
  type,
  icon,
  size = "default",
  background = "default",
  color = "default",
  border = "default",
}) {
  return (
    <>
      <Button
        className={classnames(
          "button",
          `size-${size}`,
          `background-${background}`,
          `color-${color}`,
          `border-${border}`,
          `${type}`
        )}
      >
        {type === "icon-left" && icon}
        {children}
        {type === "icon-right" && icon}
      </Button>
    </>
  );
}
