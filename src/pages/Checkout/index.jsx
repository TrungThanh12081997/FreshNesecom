import React, { useState } from "react";
import { LgBitcoin, LgDhl, LgFed, LgPaypal, LgVisa } from "../../components";
import Button from "../../components/Button";
import { useForm } from "../../hooks/useForm";
import "../Checkout/checkout.scss";
import BillingMethod from "./components/BillingMethod";

import PaymentWrap from "./components/PaymentWrap";
import TextField from "./components/TextField";
import TitleBilling from "./components/TitleBilling";

export default function CheckOut() {
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
    <div className="container">
      <h4>Homepage/Checkout page</h4>
      <div className="checkoutWrap">
        <div className="checkoutLeft">
          <div className="billingInfo">
            <TitleBilling
              title="Billing Info"
              des="Please enter your billing info"
              step="Step 1 of 5"
            />
            <div className="field">
              <form>
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
                  <label className="checkbox">
                    <input type="checkbox" />
                    Ship to a different address?
                  </label>
                </div>
                <div className="formWrap">
                  <TextField
                    label="Last name"
                    {...register("lastname")}
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
              </form>
              <div style={{ display: "none" }} onClick={submit}>
                <button>Submit</button>
              </div>
            </div>
          </div>
          <div className="billingMethod">
            <TitleBilling
              title="Billing method"
              des="Please enter your payment method"
              step="Step 2 of 5"
            />
            <div className="field">
              <BillingMethod />

            </div>
          </div>
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
                {/* <div className="paymentWrap">
                  <div className="methodWrap">
                    <div className="title">
                      <label className="checkRadio">
                        <input type="checkbox" />
                        Credit card
                      </label>
                    </div>
                    <LgVisa />
                  </div>
                  <PaymmentBox form={form}
                    error={error}
                    onChange={onChange}
                  />

                </div> */}
                {/* <div className="paymentWrap">
                  <div className="methodWrap">
                    <div className="title">
                      <label className="checkRadio">
                        <input type="checkbox" />
                        PayPal
                      </label>
                    </div>
                    <LgPaypal />
                  </div>
                  <PaymmentBox form={form}
                    error={error}
                    onChange={onChange}
                  />
                </div> */}
                {/* <div className="paymentWrap">
                  <div className="methodWrap">
                    <div className="title">
                      <label className="checkRadio">
                        <input type="checkbox" />
                        Bitcoin
                      </label>
                    </div>
                    <LgBitcoin />
                  </div>
                  <PaymmentBox form={form}
                    error={error}
                    onChange={onChange}
                  />
                </div> */}
              </form>
            </div>
          </div>
          <div className="additional">
            <TitleBilling
              title="Additional informations"
              des="Need something else? We will make it for you!"
              step="Step 4 of 5"
            />
            <div className="notes">
              <TextField
                label="Order notes"
                {...register("notes")}
                notesRegister
                placeHolder="Need a specific delivery day? Sending a gitf? Let’s say ..."
                helperText={error.notes}
              />
            </div>
          </div>
          <div className="confirmation">
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
          <div className="btnCheckout">
            <Button
              children="Complete order"
              type="icon-right"
              background="green"
              border="bold"
              color="white"
              size="large"
            />
          </div>
        </div>
        <div className="checkoutRight">
          <TitleBilling
            title="Order Summary"
            des="Price can change depending on shipping method and taxes of your state."
            step=""
          />
          <div className="itemCheckout"></div>
        </div>
      </div>
    </div>
  );
}
