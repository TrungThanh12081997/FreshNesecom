import React from 'react'
import TextField from '../TextField'
import "./style.scss"
import classnames from "classnames";

export default function PaymentBox({ form, error, onChange, isChecked }) {
    return (
        <div
            className='payment__box'
        // className={classnames("payment__box", `${isChecked ? "open" : "hide"}`)}

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
        </div>
    )
}

