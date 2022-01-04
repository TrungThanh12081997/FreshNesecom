import React from 'react'
import BillingMethod from '../BillingMethod'
import TitleBilling from '../TitleBilling'

export default function BillingMethodMain() {
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
                <div className="field">
                    <BillingMethod />

                </div>
            </div>
        </>
    )
}

