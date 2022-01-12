import React, { useState } from 'react'
import { UseAuth } from '../../../../context/AuthContext';
import TitleBilling from '../TitleBilling'

const ConfirmationMain = React.forwardRef((ref) => {
    const { isConfirm, setIsconfirmisOk, setIsOk, setConfirm,
        isOk,
        contractSubmit } = UseAuth();
    const handleConfirm = (e) => {
        e.preventDefault();
        if (isConfirm && isOk) {
            alert("thanh cong")
        }
    }

    return (<>
        <form className="confirmation"
        //  ref={AddInfoRef}
        >
            <TitleBilling
                title="Confirmation"
                des="We are getting to the end. Just few clicks and your order si ready!"
                step="Step 5 of 5"
            />
            <div className="conf">
                <label className="checkbox">
                    <input type="checkbox"
                        onChange={setIsOk}
                        checked={
                            isOk
                        }
                    />I agree with sending an Marketing and
                    newsletter emails. No spam, promissed!
                </label>
                <label className="checkbox">
                    <input type="checkbox"
                        onChange={setConfirm}
                        checked={isConfirm ? "Checked" : ""

                        } />I agree with our terms and conditions
                    and privacy policy.
                </label>

            </div>
            <button
                onClick={handleConfirm}
            >test</button>
        </form>
    </>)

})
export default ConfirmationMain