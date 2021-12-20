import React from 'react'
import "./style.scss";

import classnames from 'classnames';
export default function BlogItem({ size, children }) {
    return (
        <div className={classnames("blog__item", `size-${size}`)}>

            {children}


        </div>
    )
}
