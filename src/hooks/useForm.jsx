import { useState } from "react";
import { useDispatch } from "react-redux"
import { UseAuth } from "../context/AuthContext";
import authService from "../services/authService";
export const useForm = (initialForm) => {
    const [form, setForm] = useState(initialForm);
    const dispatch = useDispatch()

    const [check, setCheck] = useState(false);


    const addressRegex = /^\d+\s[A-z]+\s[A-z]+/g;
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,32}$/

    const handelClick = () => {
        setCheck(!check);
    };

    const onChange = (name) => (ev) => {
        setForm({
            ...form,
            [name]: ev.currentTarget.value,
        });
    };
    const register = (name) => {
        return {
            name: name,
            onChange: onChange(name),
            value: form[name],
        };
    };
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
    const validateLogin = () => {
        const errorLogin = {}
        if (!form.username) {
            errorLogin.username = "dien username"

        } else if (!emailRegex.test(form.username)) {
            errorLogin.username = "username không phải email"
        }
        if (!form.password) {
            errorLogin.password = "password không đuoc để trống"
        }
        setError(errorLogin);
        return errorLogin;
    }
    // const validateCard = () => {

    // }
    const validate = () => {
        let errorObject = {};

        if (!form.firstName) {
            errorObject.firstName = "Không được để trống";


            // else if (!passwordRegex.test(form.password)) {
            //     errorObject.password = "password khonh dung"
            // }

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
            // else if (!addressRegex.test(form.address)) {
            //     errorObject.address = "Vui lòng điền đúng định dạng";
            // }
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
            // if (!check) {
            //     errorObject.check = " Vui lòng check";
            // }
            setError(errorObject);
            return error;
        };
        const submit = (ev) => {
            ev.preventDefault();
            const validateResule = validate();
            if (Object.keys(validateResule).length === 0) {
                alert("thanh cong")



            }


        };
        return {
            error,
            check,
            handelClick,
            submit,
            register,
            validate,
            validateLogin,
            form

        }
    }
}