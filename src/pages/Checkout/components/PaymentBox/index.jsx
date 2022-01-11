import React from 'react'
import TextField from '../TextField'
import "./style.scss"
import classnames from "classnames";
import { useForm } from '../../../../hooks/useForm';

export default function PaymentBox() {
    const { validateCard, form, onChange, error } = useForm()
    function handlePayment(e) {
        e.preventDefault();
        const get = validateCard();
        if (Object.keys(get).length === 0) {
            alert("thanh cong")
        }
    }
    return (
        <form className='payment__box'
        // onSubmit={handlePayment}
        >
            <TextField
                label="Card number"
                value={form.card}
                onChange={onChange("card")}
                placeHolder="Card number"
                helperText={error.card}
            />
            <div className="cardHolder">
                <TextField
                    label="Card holder"
                    value={form.cardHolder}
                    onChange={onChange("cardHolder")}
                    placeHolder="Card holder"
                    helperText={error.cardHolder}
                />
                <TextField
                    label="Expiration date"
                    value={form.expiration}
                    onChange={onChange("expiration")}
                    placeHolder="DD/MM/YY"
                    helperText={error.expiration}
                />
                <TextField
                    label="CVC"
                    value={form.cvc}
                    onChange={onChange("cvc")}
                    placeHolder="cvc"
                    helperText={error.cvc}
                />
            </div>

        </form >
    )
}

