import React, { useImperativeHandle } from 'react'
import { LgDhl, LgFed } from '../../../../components';
import { UseAuth } from '../../../../context/AuthContext';
import { useForm } from '../../../../hooks/useForm';
import BillingMethod from '../BillingMethod'
import BillingMethodItem from '../BillingMethodItem';
import TitleBilling from '../TitleBilling'

export default function BillingMethodMain(ref) {
    const {
        error, setError, billingInfo, setBillingInfo, selectedOption,
        setSelectedOption
    } = UseAuth()

    const methods = [
        {
            name: "Fex",
            price: "+15 USD",
            text: "Additional price",
            logo: <LgDhl />
        },
        {
            name: "DHL",
            price: "+32 USD",
            text: "Additional price",
            logo: <LgFed />
        },

    ]
    const submitBM = (event) => {

        console.log(selectedOption)
        event.preventDefault();
        if (selectedOption === "Fex" || selectedOption === "DHL") {
            alert("thanh cong")
        }
    }


    return (
        <>
            <div className="billingMethod">
                <TitleBilling
                    title="Billing method"
                    des="Please enter your payment method"
                    step="Step 2 of 5"
                />
                <div className="field">
                    <form className="">
                        <BillingMethodItem
                            name="Fex"
                            price="+15 USD"
                            text="Additional price"
                            logo={<LgDhl />}
                            // onChange={() =>
                            //     setSelectedOption(name)}
                            // isChecked={name === selectedOption}
                            onChange={() => {
                                setSelectedOption("Fex")
                            }}
                            isChecked={
                                "Fex" === selectedOption
                            }
                        />
                        <BillingMethodItem
                            name="DHL"
                            price="+32 USD"
                            text="Additional price"
                            logo={<LgDhl />}
                            // onChange={() =>
                            //     setSelectedOption(name)}
                            // isChecked={name === selectedOption}
                            onChange={() => {
                                setSelectedOption("DHL")
                            }}
                            isChecked={
                                "DHL" === selectedOption
                            }
                        />

                        <button
                            onClick={submitBM}
                        >submit</button>

                    </form>
                </div>
            </div>
        </>
    )
}

