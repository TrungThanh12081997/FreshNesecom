import React, { useState } from 'react'
import { LgBitcoin, LgPaypal, LgVisa } from '../../../../components'
import PaymentBox from '../PaymentBox'
import TextField from '../TextField'
import classnames from 'classnames'
import { useForm } from '../../../../hooks/useForm'
import { UseAuth } from '../../../../context/AuthContext'
import Content from './components/content'
export default function PaymentWrap({ }) {
    const { payment, setPayment, setPM, setSetPM } = UseAuth();
    
    const PaymentWraps = [
        {
            name: "Credit card",
            content: <Content />,
            logo: <LgVisa />,
          
           


        },
        {
            name: "Paypal",
            content: <Content />,
            logo: <LgPaypal />,
           
           

        },
        {
            name: "Bitcoin",
            content: <Content />,
            logo: <LgBitcoin />,
          
           

        },
    ];
    const { error, setError, form, onChange, check, handelClick, register, submitForm } = useForm({
        firstName: "",
        lastName: "",
        emailAddress: "",
        address: "",
        country: "",
        phone: "",
        city: "",
        code: "",
    });


    const validateCard = () => {
        const errorObject = {};
        if (!form.card) {
            errorObject.card = "Không được để trống";
        }
        if (!form.cardHolder) {
            errorObject.cardHolder = "Không được để trống";
        }
        if (!form.expiration) {
            errorObject.expiration = "Không được để trống";
        }
        if (!form.cvc) {
            errorObject.cvc = "Không được để trống";
        }
        setError(errorObject);
        return errorObject;
    }
    const handlePMM = async (ev) => {
        ev.preventDefault()
        ev.stopPropagation();
        const alo = validateCard();
        console.log("alo", alo);



        if ((payment === "Credit card" || payment === "Paypal" || payment === "Bitcoin") && Object.keys(error).length === 0

        ) {
            alert("thanh cong");
            // setPayment(true);

        } else {
            alert("khong thanh cong");
        }
    }
    return (
        <>
            {
                PaymentWraps.map(PaymentWrap => {
                    const { name, logo, state, onChange, content } = PaymentWrap
                    return (
                        <form
                            className=
                            {classnames("paymentWrap", `${payment === name ? "open" : "hide"}`
                            )}


                        >
                            <div className="methodWrap">
                                <div className="title">
                                    <label className="checkRadio">
                                        <input type="checkbox"
                                            onChange={
                                                () => {
                                                    if (payment === name) {

                                                        setPayment("");
                                                    } else {
                                                        setPayment(name);
                                                    }

                                                }
                                            }
                                            checked={name === payment}
                                        />
                                        {name}
                                    </label>
                                </div>

                                {logo}
                            </div>
                            {content}

                        </form>)
                })
            }



        </>
    )
}

