// import { useState } from "react";


// export const useForm = (initialForm) => {
    
//     const addressRegex = /^\d+\s[A-z]+\s[A-z]+/g;
//     const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
//     const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,32}$/
//     const [form, setForm] = useState(initialForm);
//     const {
//         area, setArea, setSetPM, setPM, error, setError, billingInfo, setBillingInfo, selectedOption, setSelectedOption
//     } = UseAuth()
//     const [check, setCheck] = useState(false);
//     const handelClick = () => {
//         setCheck(!check);
//     };

//     const onChange = (name) => (ev) => {
//         setForm({
//             ...form,
//             [name]: ev.currentTarget.value,
//         });
//     };

//     const register = (name) => {
//         return {
//             name: name,
//             onChange: onChange(name),
//             value: form[name],
//         };
//     };

//     const validateLogin = (e) => {
//         const errorLogin = {}
//         if (!form.username) {
//             errorLogin.username = "dien username"

//         } else if (!emailRegex.test(form.username)) {
//             errorLogin.username = "username không phải email"
//         }
//         if (!form.password) {
//             errorLogin.password = "password không đuoc để trống"
//         }
//         setError(errorLogin);
//         return errorLogin;
//     }
//     const validateRegis = () => {
//         // e.preventDefault();
//         const errorLogin = {}
//         if (!emailRegex.test(form.username)) {
//             errorLogin.email = "username không phải email"
//         } else if (!form.username) {
//             errorLogin.username = "username không được để trống"
//         }
//         if (!form.name) {
//             errorLogin.name = "điền name"
//         }
//         if (!form.password) {
//             errorLogin.password = "password không đuoc để trống"
//         } if (form.password !== form.confirm) {
//             errorLogin.confirm = "password nhập lại không đúng"
//         }
//         setError(errorLogin);
//         return errorLogin;
//     }
//     const validateCard = () => {
//         const errorObject = {};
//         if (!form.card) {
//             errorObject.card = "Không được để trống";
//         }
//         if (!form.cardHolder) {
//             errorObject.cardHolder = "Không được để trống";
//         }
//         if (!form.expiration) {
//             errorObject.expiration = "Không được để trống";
//         }
//         if (!form.cvc) {
//             errorObject.cvc = "Không được để trống";
//         }
//         setError(errorObject);
//         return errorObject;
//     }

//     const validate = () => {
//         let errorObject = {};
//         if (!form.firstName) {
//             errorObject.firstName = "Không được để trống";
//         }
//         if (!form.lastName) {
//             errorObject.lastName = "Không được để trống";
//         }

//         if (!form.emailAddress) {
//             errorObject.emailAddress = "Không được để trống";
//         } else if (!emailRegex.test(form.emailAddress)) {
//             errorObject.emailAddress = "Vui lòng điền đúng định dạng";
//         }
//         if (!form.address) {
//             errorObject.address = "Không được để trống";
//         }
//         if (!form.country) {
//             errorObject.country = "Không được để trống";
//         }
//         if (!form.phone) {
//             errorObject.phone = "Không được để trống";
//         } else if (!phoneRegex.test(form.phone)) {
//             errorObject.phone = "Vui lòng điền đúng định dạng";
//         }
//         if (!form.city) {
//             errorObject.city = "Không được để trống";
//         }
//         if (!form.code) {
//             errorObject.code = "Không được để trống";
//         }

//         setError(errorObject);
//         return errorObject;
//     };

//     const submit = (ev) => {
//         ev.preventDefault();
//         const validateResule = validate();
//         console.log(validateResule)
//         if (Object.keys(validateResule).length === 0) {
//             alert("thanh cong");
//             setBillingInfo(true);
//             console.log(billingInfo);
//         }
//     }
//     const submitForm = (ev) => {
//         ev.preventDefault();

//         const alo = validateCard();
//         if (Object.keys(alo).length === 0) {
//             alert("thanh cong");
//             return setSetPM(true);
//         }



//     }


//     // const valiTextArea = () => {
//     //     let errorArea = {};
//     //     console.log('form.area :>> ', form.area);
//     //     if (!area.area) {
//     //         errorArea.area = "Không được để trống";
//     //     }
//     //     setError(errorArea);

//     //     return errorArea
//     // }
//     // function handleArea(e) {
//     //     e.preventDefault()
//     //     const areaLog = valiTextArea();
//     //     console.log('areaLog :>> ', areaLog);
//     //     if (Object.keys(area).length === 0) {
//     //         setArea(true);
//     //         // console.log(area)
//     //     }
//     // }

//     return {
//         error,
//         setError,
//         check,
//         handelClick,
//         submit,
//         register,
//         validate,
//         validateLogin,
//         form, setForm,
//         validateCard, submitForm,
//         setBillingInfo, onChange,
//         billingInfo, setPM, validateRegis, setSetPM, setPM
//         // valiTextArea, handleArea

//     }
// }


