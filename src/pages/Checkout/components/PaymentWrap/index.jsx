import React, { useState } from 'react'
import { LgBitcoin, LgPaypal, LgVisa } from '../../../../components'
import PaymentBox from '../PaymentBox'
import TextField from '../TextField'
import classnames from 'classnames'
import { useForm } from '../../../../hooks/useForm'
import { UseAuth } from '../../../../context/AuthContext'
export default function PaymentWrap({ }) {
    const { payment, setPayment } = UseAuth();
    const { error, form, onChange, check, handelClick, register } = useForm();
    const PaymentWraps = [
        {
            name: "Credit card",
            //content:<CreditCardForm/>,
            logo: <LgVisa />
        },
        {
            name: "Paypal",
            // paypalform
            logo: <LgPaypal />

        },
        {
            name: "Bitcoin",
            //bitcoinform 
            logo: <LgBitcoin />
        },
    ];
    // const { validata } = useForm({


    // })
    return (
        <>
            {
                PaymentWraps.map(PaymentWrap => {
                    const { name, logo } = PaymentWrap
                    return (
                        <div
                            className="paymentWrap"

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
                            <div
                                // className='payment__box'
                                className={classnames("payment__box", `${name === payment ? "open" : "hide"}`)}
                            >
                                <form className="">

                                    <TextField
                                        label="Card number"
                                        cardRegister
                                        {...register("card")}
                                        placeHolder="Card number"
                                        helperText={error.card}
                                    />
                                    <div className="cardHolder">
                                        <TextField
                                            label="Card holder"
                                            cardHolderRegister
                                            {...register("cardHolder")}
                                            placeHolder="Card holder"
                                            helperText={error.cardHolder}
                                        />
                                        <TextField
                                            label="Expiration date"
                                            expirationRegister
                                            {...register("expiration")}
                                            placeHolder="DD/MM/YY"
                                            helperText={error.expiration}
                                        />
                                        <TextField
                                            label="CVC"
                                            cvcRegister
                                            {...register("cvc")}
                                            placeHolder="cvc"
                                            helperText={error.cvc}
                                        />

                                    </div>
                                    <button>test</button>
                                </form>
                            </div>

                        </div>)
                })
            }



        </>
    )
}

