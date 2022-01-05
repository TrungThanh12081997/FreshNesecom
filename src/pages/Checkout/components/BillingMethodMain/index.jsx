import React, { useImperativeHandle } from 'react'
import { UseAuth } from '../../../../context/AuthContext';
import { useForm } from '../../../../hooks/useForm';
import BillingMethod from '../BillingMethod'
import TitleBilling from '../TitleBilling'

export default function BillingMethodMain(ref) {
    // useImperativeHandle(
    //     ref,
    //     () => {
    //         return {
    //             submit: () => {

    //             },
    //             reset: () => {

    //             }
    //         }
    //     }, [])
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
    const { selectedOption, setSelectedOption } = UseAuth();
    function checkBM(e) {
        console.log(selectedOption);
        e.preventDefault()
        if (selectedOption == "DHL" || selectedOption == "Fex") {
            alert("thanh cong");
            setSelectedOption(true);

        } else {
            alert("vui long chon")
        }
    }
    return (
        <>
            <div className="billingMethod"
            //  ref={billingMethodRef}
            >
                <TitleBilling
                    title="Billing method"
                    des="Please enter your payment method"
                    step="Step 2 of 5"
                />
                <form onSubmit={checkBM} className="field">
                    <BillingMethod />
                    <button>ok</button>
                </form>
            </div>
        </>
    )
}

