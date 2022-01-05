import { useState } from "react";
import { useDispatch } from "react-redux"
import { UseAuth } from "../context/AuthContext";
export const useForm = (initialForm) => {
    const [form, setForm] = useState({ initialForm });
    const dispatch = useDispatch()
    const [error, setError] = useState({});
    const [check, setCheck] = useState(false);
    const { clear, setClear } = UseAuth()
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const addressRegex = /^\d+\s[A-z]+\s[A-z]+/g;
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

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
    const validate = () => {
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
        return errorObject;
    };
    const submit = async (ev) => {
        ev.preventDefault();


        ev.stopPropagation();
        const validateResule = validate();
        console.log(Object.keys(validateResule).length);
        console.log(validateResule)
        if (Object.keys(validateResule).length === 0) {
            alert("Thành công");
            dispatch({
                type: "LOGIN",
                payload: form
            })
            setClear(true);
            console.log(clear)
        }

    };
    return {
        error,
        check,
        handelClick,
        submit,
        register,
    };
};