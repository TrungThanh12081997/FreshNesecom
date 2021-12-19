import React from 'react'
import "./style.scss"
export default function BlogTag({ tag }) {
    return (
        <div className='blog__tag'>
            {tag}
        </div>
    )
}
