import React from 'react'
import "./style.scss"
import classnames from 'classnames'
export default function BlogDate({ name, date, color }) {
    return (
        <div className='date'>
            <div className={classnames("date__item", `color-${color}`)}>
                {name}

            </div>

            <div className={classnames("date__item", `color-${color}`)}>
                {date}

            </div>

        </div>
    )
}
