
import React, { useState } from 'react'
import { LgDhl, LgFed } from "../../../../components"
import BillingMethodItem from "../BillingMethodItem";

export default function BillingMethod() {
    const [selectedOption, setSelectedOption] = useState("");

    const methods = [
        {
            name: " Fex",
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

    return (
        <>
            {methods.map(function (method) {
                const { name, price, text, logo } = method;
                return (
                    <BillingMethodItem
                        name={name}
                        price={price}
                        text={text}
                        logo={logo}
                        onChange={() =>
                            setSelectedOption(name)}
                        isChecked={name === selectedOption}

                    />
                )
            })}
        </>
    )
}
