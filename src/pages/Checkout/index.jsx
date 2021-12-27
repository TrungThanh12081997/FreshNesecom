import React, { useState } from "react";
import { LgBitcoin, LgDhl, LgFed, LgPaypal, LgVisa } from "../../components";
import Button from "../../components/Button";
import "../Checkout/checkout.scss";
import TextField from "./components/TextField";
import TitleBilling from "./components/TitleBilling";

export default function CheckOut() {
  const [form, setForm] = useState({
    firstName: "",
  });
  const [error, setError] = useState({});
  const submit = (ev) => {
    // ev.preventDefault();
    console.log("abc");
    let errorObject = {};
    if (!form.firstName) {
      errorObject.firstName = "Không được để trống";
    }
    setError(errorObject);
    if (Object.keys(errorObject).length === 0) {
      alert("Thành công");
    }
  };
  const _onChange = (name) => (ev) => {
    setForm({
      ...form,
      [name]: ev.currentTarget.value,
    });
  };

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
                    value={form.firstName}
                    onChange={_onChange("firstName")}
                    placeHolder="First name"
                    helperText={error.firstName}
                  />
                  <TextField
                    label="Email address"
                    value={form.emailAddress}
                    onChange={_onChange("emailAddress")}
                    placeHolder="Email addess"
                    helperText={error.emailAddress}
                  />
                  <TextField
                    label="Address"
                    value={form.address}
                    onChange={_onChange("address")}
                    placeHolder="Addess"
                    helperText={error.address}
                  />
                  <TextField
                    label="State / Country"
                    value={form.country}
                    onChange={_onChange("country")}
                    placeHolder="Choose a state or Country"
                    helperText={error.country}
                  />
                  <label className="checkbox">
                    <input type="checkbox" checked="checked" />
                    Ship to a different address?
                  </label>
                </div>
                <div className="formWrap">
                  <TextField
                    label="Last name"
                    value={form.lastName}
                    onChange={_onChange("lastName")}
                    placeHolder="Last name"
                    helperText={error.lastName}
                  />
                  <TextField
                    label="Phone number"
                    value={form.phone}
                    onChange={_onChange("phone")}
                    placeHolder="Phone number"
                    helperText={error.phone}
                  />
                  <TextField
                    label="Town / City"
                    value={form.city}
                    onChange={_onChange("city")}
                    placeHolder="Town or city"
                    helperText={error.city}
                  />
                  <TextField
                    label="ZIP/Postal code"
                    value={form.code}
                    onChange={_onChange("code")}
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
              <form>
                <div className="methodWrap">
                  <div className="title">
                    <label className="checkRadio">
                      <input type="radio" checked="checked" />
                      FedEx
                    </label>
                  </div>
                  <div className="des">
                    <span>+32 USD</span> <span>Additional price</span>
                  </div>
                  <LgFed />
                </div>
                <div className="methodWrap">
                  <div className="title">
                    <label className="checkRadio">
                      <input type="radio" checked="checked" />
                      DHL
                    </label>
                  </div>
                  <div className="des">
                    <span>+15 USD</span> <span>Additional price</span>
                  </div>
                  <LgDhl />
                </div>
              </form>
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
                <div className="paymentWrap">
                  <div className="methodWrap">
                    <div className="title">
                      <label className="checkRadio">
                        <input type="radio" checked="checked" />
                        Credit card
                      </label>
                    </div>
                    <LgVisa />
                  </div>
                  <TextField
                    label="Card number"
                    value={form.card}
                    onChange={_onChange("card")}
                    placeHolder="Card number"
                    helperText={error.card}
                  />
                  <div className="cardHolder">
                    <TextField
                      label="Card holder"
                      value={form.cardHolder}
                      onChange={_onChange("cardHolder")}
                      placeHolder="Card holder"
                      helperText={error.cardHolder}
                    />
                    <TextField
                      label="Expiration date"
                      value={form.expiration}
                      onChange={_onChange("expiration")}
                      placeHolder="DD/MM/YY"
                      helperText={error.expiration}
                    />
                    <TextField
                      label="CVC"
                      value={form.cvc}
                      onChange={_onChange("cvc")}
                      placeHolder="cvc"
                      helperText={error.cvc}
                    />
                  </div>
                </div>
                <div className="methodWrap">
                  <div className="title">
                    <label className="checkRadio">
                      <input type="radio" checked="checked" />
                      PayPal
                    </label>
                  </div>
                  <LgPaypal />
                </div>
                <div className="methodWrap">
                  <div className="title">
                    <label className="checkRadio">
                      <input type="radio" checked="checked" />
                      Bitcoin
                    </label>
                  </div>
                  <LgBitcoin />
                </div>
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
                value={form.card}
                onChange={_onChange("notes")}
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
                <input type="checkbox" checked="checked" />I agree with sending
                an Marketing and newsletter emails. No spam, promissed!
              </label>
              <label className="checkbox">
                <input type="checkbox" checked="checked" />I agree with our
                terms and conditions and privacy policy.
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
        <div className="checkoutRight"></div>
      </div>
    </div>
  );
}
