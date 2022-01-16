import React, { useState } from "react";
import { UseAuth } from "../../../../context/AuthContext";
import { useForm } from '../../../../hooks/useForm';
import TextField from '../TextField'
import TitleBilling from '../TitleBilling'

export default function BillingInfoMain() {
    const { error, validate, submit, register } = useForm({
        firstName: "",
        lastName: "",
        emailAddress: "",
        address: "",
        country: "",
        phone: "",
        city: "",
        code: "",
    });
    const { billingInfo, setBillingInfo } = UseAuth()

    const handle = (e) => {
        e.preventDefault();
        const vali = validate();

        if (Object.keys(vali).length === 0) {
            alert("thanh cong");
            setBillingInfo(true);
            console.log(billingInfo);
        }
    }

    return (
        <>
            <div className="billingInfo"
            // ref={ref}
            >
                <TitleBilling
                    title="Billing Info"
                    des="Please enter your billing info"
                    step="Step 1 of 5"
                />
                <div className="field" >
                    <form
                    // onSubmit={submit}
                    >

                        <div className="formWrap">
                            <TextField
                                label="First name"
                                firstNameRegister
                                {...register("firstName")}
                                placeHolder="First name"
                                helperText={error.firstName}

                            />
                            <TextField
                                label="Email address"
                                {...register("emailAddress")}
                                emailRegister
                                placeHolder="Email addess"
                                helperText={error.emailAddress}

                            />
                            <TextField
                                label="Address"
                                {...register("address")}
                                addressRegister
                                placeHolder="Addess"
                                helperText={error.address}
                            />
                            <TextField
                                label="State / Country"
                                {...register("country")}
                                countryRegister
                                placeHolder="Choose a state or Country"
                                helperText={error.country}
                            />

                        </div>
                        <div className="formWrap">
                            <TextField
                                label="Last name"
                                {...register("lastName")}
                                lastNameRegister
                                placeHolder="Last name"
                                helperText={error.lastName}
                            />
                            <TextField
                                label="Phone number"
                                {...register("phone")}
                                phoneRegister
                                placeHolder="Phone number"
                                helperText={error.phone}
                            />
                            <TextField
                                label="Town / City"
                                // value={form.city}
                                {...register("city")}
                                cityRegister
                                helperText={error.city}
                            />
                            <TextField
                                label="ZIP/Postal code"
                                {...register("code")}
                                codeRegister
                                placeHolder="Postal code or ZIP"
                                helperText={error.code}
                            />
                        </div>
                        {/* <label className="checkbox">
                            <input type="checkbox" />
                            Ship to a different address?
                        </label> */}

                        <button
                            onClick={handle}
                        >Submit</button>


                    </form>
                </div>
            </div>
        </>
    )
}
