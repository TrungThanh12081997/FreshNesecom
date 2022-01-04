import React from 'react'
import { useForm } from '../../../../hooks/useForm';
import PaymentWrap from '../PaymentWrap'
import TitleBilling from '../TitleBilling'

export default function PaymentMethodMain() {
    const { error, form, onChange, check, handelClick, submit, register } = useForm({
        firstName: "",
        lastName: "",
        emailAddress: "",
        address: "",
        country: "",
        phone: "",
        city: "",
        code: "",
    });
    return (
        <>
            <div className="paymentMethod"
            //  ref={PaymentMethodRef}
            >
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

                    </form>
                </div>
            </div>
        </>
    )
}
