import React from 'react'
import "./style.scss"
import classnames from 'classnames'
export default function BlogImg({ size, href }) {
    return (
        <div className={
            classnames("blog__img", `size-${size}`)
        }>
            <img src={href} alt="" className="" />
        </div>
    )
}
