import { message } from "antd";
import classNames from "classnames";
import React, { useRef, useState } from "react";
import { IconCompare, IconRemove, IconStar, IconWish, LgBitcoin, LgDhl, LgFed, LgPaypal, LgVisa } from "../../components";
import Button from "../../components/Button";
import { UseAuth } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import "../Checkout/checkout.scss";
import BillingInfoMain from "./components/BillingInfoMain";
import BillingMethod from "./components/BillingMethod";
import BillingMethodItem from "./components/BillingMethodItem";
import BillingMethodMain from "./components/BillingMethodMain";
import ConfirmationMain from "./components/ConfirmationMain";
import Confirmation from "./components/ConfirmationMain";

import PaymentMethodMain from "./components/PaymentMethodMain";

import PaymentWrap from "./components/PaymentWrap";
import TextArea from "./components/TextArea/Textarea";
import TextField from "./components/TextField";
import TitleBilling from "./components/TitleBilling";

export default function CheckOut() {
  const addressRegex = /^\d+\s[A-z]+\s[A-z]+/g;
  const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,32}$/

  const billingInfoRef = useRef()
  const billingMethodRef = useRef()
  const PaymentMethodRef = useRef()
  const AddInfoRef = useRef()
  const { billingInfo, form, onChange, check, handelClick, submit, register } = useForm({
    firstName: "",
    lastName: "",
    emailAddress: "",
    address: "",
    country: "",
    phone: "",
    city: "",
    code: "",
  });


  const {
    selectedOption, setSelectedOption, DHL,
    setDHL, setConfirm,
    setOk,
    contractSubmit,
    FEX,
    setFEX, payment, setPayment,
    isConfirm,
    setIsconfirm,
    isOk,
    setIsOk, clear, setClear, error, setError, setPM
  } = UseAuth()

  const handleSubmitCheckout = (e) => {
    e.preventDefault();
    let errorObject = {};
    if (!form.firstName) {
      errorObject.firstName = "Không được để trống";
    }
    if (!form.lastName) {
      errorObject.lastName = "Không được để trống";
    }

    if (!form.emailAddress) {
      errorObject.emailAddress = "Không được để trống";
    } else if (!emailRegex.test(form.emailAddress)) {
      errorObject.emailAddress = "Vui lòng điền đúng định dạng";
    }
    if (!form.address) {
      errorObject.address = "Không được để trống";
    }
    if (!form.country) {
      errorObject.country = "Không được để trống";
    }
    if (!form.phone) {
      errorObject.phone = "Không được để trống";
    } else if (!phoneRegex.test(form.phone)) {
      errorObject.phone = "Vui lòng điền đúng định dạng";
    }
    if (!form.city) {
      errorObject.city = "Không được để trống";
    }
    if (!form.code) {
      errorObject.code = "Không được để trống";
    }
    if (!form.card) {
      errorObject.card = "Không được để trống";
    }
    if (!form.cardHolder) {
      errorObject.cardHolder = "Không được để trống";
    }
    if (!form.expiration) {
      errorObject.expiration = "Không được để trống";
    }
    if (!form.cvc) {
      errorObject.cvc = "Không được để trống";
    }
    setError(errorObject);

    if (Object.keys(errorObject).length === 0 && (selectedOption === "Fex" || selectedOption === "DHL")
      && (payment === "Credit card" || payment === "Paypal" || payment === "Bitcoin") && isOk && isConfirm
    ) {
      message.success("Bạn đã đăng ký mua hàng thành công")
    } else {
      message.error("Bạn đã bỏ quên mục nào đó")
    }
  }

  return (
    <div className="container">
      <h4 className="homapage">Homepage/Checkout page</h4>
      <form className="checkoutWrap"
      // onSubmit={submit}
      >
        <div className="checkoutLeft">

          {/* <BillingInfoMain
            ref={billingInfoRef}
          /> */}
          <div className="billingInfo"
          // ref={ref}
          >
            <TitleBilling
              title="Billing Info"
              des="Please enter your billing info"
              step="Step 1 of 5"
            />
            <div className="field" >


              <div className="formWrap">
                <TextField
                  label="First name"

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

              {/* <button
                            onClick={handle}
                        >Submit</button> */}



            </div>
          </div>
          {/* <BillingMethodMain
            ref={billingMethodRef}
          /> */}
          <div className="billingMethod">
            <TitleBilling
              title="Billing method"
              des="Please enter your payment method"
              step="Step 2 of 5"
            />
            <div className="field">
              <div className="">
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

                {/* <button
                  onClick={submitBM}
                >submit</button> */}

              </div>
            </div>
          </div>

          {/* <PaymentMethodMain
            ref={PaymentMethodRef}
          /> */}
          <div className="paymentMethod">
            <TitleBilling
              title="Payment method"
              des="Please enter your payment method"
              step="Step 3 of 5"
            />
            <div className="field">

              <div
                className=
                {classNames("paymentWrap", `${payment === "Credit card" ? "open" : "hide"}`
                )}


              >
                <div className="methodWrap">
                  <div className="title">
                    <label className="checkRadio">
                      <input type="checkbox"
                        onChange={
                          () => {
                            if (payment === "Credit card") {

                              setPayment("");
                            } else {
                              setPayment("Credit card");
                            }

                          }
                        }
                        checked={payment === "Credit card"}
                      />

                    </label>
                  </div>

                  <LgVisa />
                </div>
                <div className='payment__box'>
                  <div

                    className="">

                    <TextField
                      label="Card number"
                      cardRegister
                      {...register("card")}
                      placeHolder="Card number"
                      helperText={error.card}
                    />
                    <div className="cardHolder">
                      <TextField
                        label="Card holder"
                        cardHolderRegister
                        {...register("cardHolder")}
                        placeHolder="Card holder"
                        helperText={error.cardHolder}
                      />
                      <TextField
                        label="Expiration date"
                        expirationRegister
                        {...register("expiration")}
                        placeHolder="DD/MM/YY"
                        helperText={error.expiration}
                      />
                      <TextField
                        label="CVC"
                        cvcRegister
                        {...register("cvc")}
                        placeHolder="cvc"
                        helperText={error.cvc}
                      />

                    </div>
                  </div>
                </div>

              </div>
              <div
                className=
                {classNames("paymentWrap", `${payment === "Paypal" ? "open" : "hide"}`
                )}


              >
                <div className="methodWrap">
                  <div className="title">
                    <label className="checkRadio">
                      <input type="checkbox"
                        onChange={
                          () => {
                            if (payment === "Paypal") {

                              setPayment("");
                            } else {
                              setPayment("Paypal");
                            }

                          }
                        }
                        checked={payment === "Paypal"}
                      />

                    </label>
                  </div>

                  <LgPaypal />
                </div>
                <div className='payment__box'>
                  <div

                    className="">

                    <TextField
                      label="Card number"
                      cardRegister
                      {...register("card")}
                      placeHolder="Card number"
                      helperText={error.card}
                    />
                    <div className="cardHolder">
                      <TextField
                        label="Card holder"
                        cardHolderRegister
                        {...register("cardHolder")}
                        placeHolder="Card holder"
                        helperText={error.cardHolder}
                      />
                      <TextField
                        label="Expiration date"
                        expirationRegister
                        {...register("expiration")}
                        placeHolder="DD/MM/YY"
                        helperText={error.expiration}
                      />
                      <TextField
                        label="CVC"
                        cvcRegister
                        {...register("cvc")}
                        placeHolder="cvc"
                        helperText={error.cvc}
                      />

                    </div>
                  </div>
                </div>

              </div>
              <div
                className=
                {classNames("paymentWrap", `${payment === "Bitcoin" ? "open" : "hide"}`
                )}


              >
                <div className="methodWrap">
                  <div className="title">
                    <label className="checkRadio">
                      <input type="checkbox"
                        onChange={
                          () => {
                            if (payment === "Bitcoin") {

                              setPayment("");
                            } else {
                              setPayment("Bitcoin");
                            }

                          }
                        }
                        checked={payment == "Bitcoin"}
                      />

                    </label>
                  </div>

                  <LgBitcoin />
                </div>
                <div className='payment__box'>
                  <div

                    className="">

                    <TextField
                      label="Card number"
                      cardRegister
                      {...register("card")}
                      placeHolder="Card number"
                      helperText={error.card}
                    />
                    <div className="cardHolder">
                      <TextField
                        label="Card holder"
                        cardHolderRegister
                        {...register("cardHolder")}
                        placeHolder="Card holder"
                        helperText={error.cardHolder}
                      />
                      <TextField
                        label="Expiration date"
                        expirationRegister
                        {...register("expiration")}
                        placeHolder="DD/MM/YY"
                        helperText={error.expiration}
                      />
                      <TextField
                        label="CVC"
                        cvcRegister
                        {...register("cvc")}
                        placeHolder="cvc"
                        helperText={error.cvc}
                      />

                    </div>
                  </div>
                </div>

              </div>


            </div>
          </div>
          <div className="additional">
            <TitleBilling
              title="Additional informations"
              des="Need something else? We will make it for you!"
              step="Step 4 of 5"
            />
            <div className="notes">
              <TextArea
                label="Order notes"
                {...register("notes")}
                notesRegister
                placeHolder="Need a specific delivery day? Sending a gitf? Let’s say ..."
                helperText={error.notes}

              />
            </div>
          </div>

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
                <input type="checkbox"
                  onChange={
                    () => {
                      if (isOk) {
                        setIsOk(false)
                      } else {
                        setIsOk(true)
                      }
                    }
                  }
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

          </div>
          <div className="btnCheckout">
            <Button
              children="Complete order"
              type="icon-right"
              background="green"
              border="bold"
              color="white"
              size="large"
              onClick={
                handleSubmitCheckout
              }
            />
          </div>
        </div>
        <div className="checkoutRight">
          <TitleBilling
            title="Order Summary"
            des="Price can change depending on shipping method and taxes of your state."
            step=""
          />
          <div className="itemCart">
            <div className="cartImage">
              <div className="image"></div>
              <div className="choose">
                <div className="wishlist">
                  <IconWish />
                  <p className="titleSmall">Wishlist</p>
                </div>
                <div className="compare">
                  <IconCompare />
                  <p className="titleSmall">Compare</p>
                </div>
                <div className="remove">
                  <IconRemove />
                  <p className="titleSmall">Remove</p>
                </div>
              </div>
            </div>

            <div className="cartInfItem">
              <p className="title">Product title</p>
              <div className="info">
                <div className="infoLeft">
                  <p className="titleSmall">Farm:</p>
                  <p className="titleSmall">Fressheness:</p>
                </div>
                <div className="infoRight">
                  <p>Tharam farm</p>
                  <p>1 years ago</p>
                </div>
              </div>
              <div className="wrapStar">
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
              </div>
              <h3>349USD</h3>
              <p className="discount">23.44USD</p>
            </div>
          </div>
          <div className="itemCheckout">
          </div>
        </div>
      </form>
    </div>
  );
}
