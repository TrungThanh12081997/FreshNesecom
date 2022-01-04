import React from 'react'
import TitleBilling from '../TitleBilling'

export default function ConfirmationMain() {
    return (<>
        <div className="confirmation"
        //  ref={AddInfoRef}
        >
            <TitleBilling
                title="Confirmation"
                des="We are getting to the end. Just few clicks and your order si ready!"
                step="Step 5 of 5"
            />
            <div className="conf">
                <label className="checkbox">
                    <input type="checkbox" />I agree with sending an Marketing and
                    newsletter emails. No spam, promissed!
                </label>
                <label className="checkbox">
                    <input type="checkbox" />I agree with our terms and conditions
                    and privacy policy.
                </label>
            </div>
        </div>
    </>)

}
