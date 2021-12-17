import React from 'react'
import { GreenRight } from '../../ArrowIcon/'
import Button from '../../Button'
import "../style.scss"
export default function SliderTitle({ title }) {
    return (
        <div className='test'>
            <span className="span">{title}</span>
            <Button children="Button" icon={<GreenRight />} type="icon-right" background="white" border="none"
                color="black" size="small" />
        </div>
    )
}
