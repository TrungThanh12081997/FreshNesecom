import React, { useRef, useState } from "react";
import { IconCompare, IconRemove, IconStar, IconWish, LgBitcoin, LgDhl, LgFed, LgPaypal, LgVisa } from "../../components";
import Button from "../../components/Button";
import { UseAuth } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import "../Checkout/checkout.scss";
import BillingInfoMain from "./components/BillingInfoMain";
import BillingMethod from "./components/BillingMethod";
import BillingMethodMain from "./components/BillingMethodMain";
import ConfirmationMain from "./components/ConfirmationMain";
import Confirmation from "./components/ConfirmationMain";

import PaymentMethodMain from "./components/PaymentMethodMain";

import PaymentWrap from "./components/PaymentWrap";
import TextField from "./components/TextField";
import TitleBilling from "./components/TitleBilling";

export default function CheckOut() {
  const { form, onChange, check, handelClick, submit, register } = useForm({
    firstName: "",
    lastName: "",
    emailAddress: "",
    address: "",
    country: "",
    phone: "",
    city: "",
    code: "",
  });

  const billingInfoRef = useRef()
  const billingMethodRef = useRef()
  const PaymentMethodRef = useRef()
  const AddInfoRef = useRef()
  // // const useRef = use
  // const handleSubmit = () => {
  //   const errorObject = {
  //     ...billingInfoRef.current?.submit(),
  //     ...billingMethodRef.current?.submit(),
  //     ...PaymentMethodRef.current?.submit(),
  //     ...AddInfoRef.current?.submit(),

  //   }
  //   if (Object.keys(errorObject).length === 0) {
  //     alert("api");/// submit api
  //   }
  // }
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
    setIsOk, clear, setClear, error, setError
  } = UseAuth()


  function handleSubmitCheckout(e) {
    e.preventDefault()
    console.log(error);
    console.log(payment);
    console.log(isOk);
    console.log(isConfirm);
    console.log(selectedOption);

    if (
      // !error &&
      selectedOption && payment && isOk && isConfirm) {
      alert("thành cong")
    } else {
      alert("bạn đã miss gì đó")
    }
  }
  return (
    <div className="container">
      <h4>Homepage/Checkout page</h4>
      <form className="checkoutWrap" onSubmit={handleSubmitCheckout}>
        <div className="checkoutLeft">

          <BillingInfoMain
            ref={billingInfoRef}
          />

          <BillingMethodMain
            ref={billingMethodRef}
          />

          <PaymentMethodMain
            ref={PaymentMethodRef}
          />
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

          <ConfirmationMain
            ref={AddInfoRef}
          />
          <div className="btnCheckout">
            <Button
              children="Complete order"
              type="icon-right"
              background="green"
              border="bold"
              color="white"
              size="large"
            // onClick={
            //   handleSubmit
            // }
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
