import React from 'react'
import "./style.scss";

import classnames from 'classnames';
import { Link } from 'react-router-dom';
import BlogDate from '../BlogDate';
import Avatar from '../../../Avatar';
export default function BlogItem({ size, href, para, tag, name, date, color }) {
    return (
        <div className={classnames("blog__item", `size-${size}`)}>

            <div className="blog__img">
                <img src={href} alt="" className="" />
            </div>
            <div className="blog__tag">{tag}</div>
            <div className="blog__para">
                <Link className='blog__para-title' to="">
                    {para}
                </Link>
                <div className="blog__para-title">
                    <Avatar href={href} size="small" />

                    <BlogDate name={name} date={date} color={color} />
                </div>
            </div>



        </div>
    )
}
