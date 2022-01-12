
import { UseAuth } from "../../../../../../context/AuthContext";
import { useForm } from "../../../../../../hooks/useForm"
import TextField from "../../../TextField"

export default function Content() {
    const { payment, setPayment } = UseAuth();
    const { submitForm, error, validateCard, form, onChange, check, handelClick, register } = useForm({

    });
    // function handle(e) {
    //     e.preventDefault();
    //     const vali = validateCard();
    //     console.log(vali)
    // }
    // handle();

    return (
        <div className='payment__box'>
            <form

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
                        onClick={submitForm}
                    >ok</button>
                </div>
            </form>
        </div>
    )
}
