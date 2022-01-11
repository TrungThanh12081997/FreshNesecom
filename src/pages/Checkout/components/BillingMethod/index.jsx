
import React, { useState } from 'react'
import { LgDhl, LgFed } from "../../../../components"
import { UseAuth } from '../../../../context/AuthContext';
import BillingMethodItem from "../BillingMethodItem";

export default function BillingMethod() {
    // const [selectedOption, setSelectedOption] = useState("");
    const { selectedOption, setSelectedOption } = UseAuth()

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
    // const setCheckPayment = (ev) => {
    //     ev.preventDefault();
    //     if (selectedOption === "Fex" || selectedOption === "DHL") {
    //         alert("thanh cong")
    //     }

    // }

    return (
        <>
            {methods.map(function (method) {
                const { name, price, text, logo } = method;
                return (
                    < >

                        <BillingMethodItem
                            name={name}
                            price={price}
                            text={text}
                            logo={logo}
                            // onChange={() =>
                            //     setSelectedOption(name)}
                            // isChecked={name === selectedOption}
                            onChange={() => {
                                setSelectedOption(name)
                            }}
                            isChecked={
                                name === selectedOption
                            }
                        />
                        {/* <button
                            onCLick={setCheckPayment}
                        >submit</button> */}
                    </>
                )
            })}
        </>
    )
}
