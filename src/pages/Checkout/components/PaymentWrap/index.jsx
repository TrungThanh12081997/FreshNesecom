import React, { useState } from 'react'
import { LgBitcoin, LgPaypal, LgVisa } from '../../../../components'
import PaymentBox from '../PaymentBox'
import TextField from '../TextField'
import classnames from 'classnames'
import { useForm } from '../../../../hooks/useForm'
import { UseAuth } from '../../../../context/AuthContext'
import Content from './components/content'
export default function PaymentWrap({ }) {
    const { payment, setPayment } = UseAuth();
    const { error, validateCard, form, onChange, check, handelClick, register } = useForm({

    });
    const PaymentWraps = [
        {
            name: "Credit card",
            content: <Content />,
            logo: <LgVisa />
        },
        {
            name: "Paypal",
            content: <Content />,
            logo: <LgPaypal />

        },
        {
            name: "Bitcoin",
            content: <Content />,
            logo: <LgBitcoin />
        },
    ];

    return (
        <>
            {
                PaymentWraps.map(PaymentWrap => {
                    const { name, logo, content } = PaymentWrap
                    return (
                        <div
                            className=
                            {classnames("paymentWrap", `${name === payment ? "open" : "hide"}`
                            )}
                       

                        >
                            <div className="methodWrap">
                                <div className="title">
                                    <label className="checkRadio">
                                        <input type="checkbox"
                                            onChange={
                                                () => { setPayment(name) }
                                            }
                                            checked={name === payment}
                                        />
                                        {name}
                                    </label>
                                </div>

                                {logo}
                            </div>
                            {content}
                         

                        </div>)
                })
            }



        </>
    )
}

