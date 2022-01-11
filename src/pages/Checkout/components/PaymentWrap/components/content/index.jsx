import { useForm } from "../../../../../../hooks/useForm";
import TextField from "../../../TextField"

const Content = (params) => {
    const { error, form, onChange, check, handelClick, register } = useForm({

    });
    return (
        <div
            // className='payment__box'
            className="payment__box"
        >
            <form className="">

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
            </form>
        </div>
    )
}
export default Content