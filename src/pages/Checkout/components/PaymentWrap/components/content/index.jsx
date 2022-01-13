
import { UseAuth } from "../../../../../../context/AuthContext";
import { useForm } from "../../../../../../hooks/useForm"
import TextField from "../../../TextField"

export default function Content() {
    const { error, setError, form, onChange, check, handelClick, register, submitForm } = useForm({
        firstName: "",
        lastName: "",
        emailAddress: "",
        address: "",
        country: "",
        phone: "",
        city: "",
        code: "",
    });

    const { payment, setPayment, setPM, setSetPM } = UseAuth();
    const validateCard = () => {
        const errorObject = {};
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
        return errorObject;
    }
    const handlePMM = async (ev) => {
        ev.preventDefault()
        ev.stopPropagation();
        const alo = validateCard();
        console.log("alo", alo);



        if ((payment === "Credit card" || payment === "Paypal" || payment === "Bitcoin") && Object.keys(alo).length === 0

        ) {
            alert("thanh cong");
            // setPayment(true);

        } else {
            alert("khong thanh cong");
        }
    }

    return (
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
                    <button
                        onClick={handlePMM}
                    >ok</button>
                </div>
            </div>
        </div>
    )
}
