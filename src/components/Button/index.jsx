import React from 'react'
import classnames from 'classnames'
import "./style.scss"
import blackLeft from "../ArrowIcon/blackLeft"
import blackRight from "../ArrowIcon/blackRight"
import whiteLeft from "../ArrowIcon/whiteLeft"
import greenLeft from "../ArrowIcon/greenLeft"
import whiteRight from "../ArrowIcon/whiteRight"
import greenRight from "../ArrowIcon/greenRight"


export default function Button({ children, type, icon, size = "default", background = "default", color = "default", border = "default" }) {
    return (
        <div>
            <div className={classnames("button", `size-${size}`, `background-${background}`, `color-${color}`, `border-${border}`)}>
                {type === "icon-left" ? icon : ""}
                {children}
                {type === "icon-right" ? icon : ""}

            </div>

        </div>
    )
}
