import React from 'react'
import classnames from 'classnames'
import "./style.scss"
export default function BlogTitle({ size, title }) {
    return (
        <div className={classnames("blog__title", `size-${size}`)}>
            {title}
        </div>
    )
}
