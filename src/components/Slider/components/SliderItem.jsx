import React from 'react'
import basket from "../../../assets/img/meo.jpg"
import Avatar from '../../Avatar'
export default function SliderItem({ para, under }) {
    return (
        <div className='slider__item'>
            <span className="slider__item-text">{para}</span>
            <h5 className="">{under}</h5>
            <div className="slider__item-bottom">

                <Avatar href={basket} size="middle" />
            </div>
        </div>
    )
}
