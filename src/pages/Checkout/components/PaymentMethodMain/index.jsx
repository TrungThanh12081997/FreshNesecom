import React from 'react'
import { UseAuth } from '../../../../context/AuthContext';
import { useForm } from '../../../../hooks/useForm';
import PaymentWrap from '../PaymentWrap'
import TitleBilling from '../TitleBilling'

export default function PaymentMethodMain() {
    const { error, form, setPM, onChange, check, handelClick, register } = useForm({
        firstName: "",
        lastName: "",
        emailAddress: "",
        address: "",
        country: "",
        phone: "",
        city: "",
        code: "",
    });
    const { payment, setPayment } = UseAuth();
    function handlePMM(ev) {
        ev.preventDefault()
        ev.stopPropagation();
        if (payment === "Credit card" || payment === "Paypal" || payment === "Bitcoin"
        ) {
            alert("thanh cong ");
            // setPayment(true);
            console.log(setPM)
        } else {
            alert("khong thanh cong ");
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
                    <form>
                        <PaymentWrap
                            onChange={onChange}
                            form={form}
                            error={error}

                        />
                        <button
                            onClick={handlePMM}
                        >submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
