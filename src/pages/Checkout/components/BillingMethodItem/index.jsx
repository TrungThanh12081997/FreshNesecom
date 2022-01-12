import React from 'react'
import "./style.scss"
export default function BillingMethodItem({ price, text, name, logo, onChange, isChecked }) {
    return (
        <>
            <div className="field">
                <div action="" className="">
                    <div className="methodWrap">
                        <div className="title">
                            <label className="checkRadio">
                                <input type="checkbox"
                                    onChange={onChange}
                                    checked={isChecked}

                                />
                                {name}
                            </label>
                        </div>
                        <div className="des">
                            <span>{price}</span> <span>{text}</span>
                        </div>
                        <div className="">
                            {logo}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
