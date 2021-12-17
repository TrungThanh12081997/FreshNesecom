import React from 'react'

export default function SliderItem({ para, under }) {
    return (
        <div className='slider__item'>
            <span className="slider__item-text">{para}</span>
            <h5 className="">{under}</h5>
        </div>
    )
}
