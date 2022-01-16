import React from 'react'
import { UseAuth } from '../../../../context/AuthContext';
import { useForm } from '../../../../hooks/useForm';
import PaymentWrap from '../PaymentWrap'
import TitleBilling from '../TitleBilling'

export default function PaymentMethodMain() {
    const { validateCard, setError, error, form, onChange, check, handelClick, register, submitForm } = useForm({
        firstName: "",
        lastName: "",
        emailAddress: "",
        address: "",
        country: "",
        phone: "",
        city: "",
        code: "",
    });

    const { payment, setPayment, setPM, setSetPM } = UseAuth();
    const handlePMM = async (ev) => {
        ev.preventDefault()
        ev.stopPropagation();
        const errorObject = {};
        if (!form.card) {
            errorObject.card = "Không được để trống";
        } else {
            errorObject.card = ""
        }
        if (!form.cardHolder) {
            errorObject.cardHolder = "Không được để trống";
        } else {
            errorObject.cardHolder = ""
        }
        if (!form.expiration) {
            errorObject.expiration = "Không được để trống";
        } else {
            errorObject.expiration = ""
        }
        if (!form.cvc) {
            errorObject.cvc = "Không được để trống";
        } else {
            errorObject.cvc = ""
        }

        const alo = validateCard();
        // console.log(alo)
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
            <div className="paymentMethod">
                <TitleBilling
                    title="Payment method"
                    des="Please enter your payment method"
                    step="Step 3 of 5"
                />
                <div className="field">
                    <div>
                        <PaymentWrap
                            onChange={onChange}
                            form={form}
                            error={error}

                        />
                        {/* <button
                            onClick={handlePMM}
                        >submit</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}
