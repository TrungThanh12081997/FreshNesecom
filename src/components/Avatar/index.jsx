import React from 'react';
import classnames from 'classnames';
import "./style.scss"
export default function Avatar({ href, size }) {

    return (

        <div className={classnames("avatar", `size-${size}`)}>
            <img src={href} alt="" />
        </div>

    )
}

