import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { BlackRight } from '../../components'
import Button from '../../components/Button'
import { useForm } from '../../hooks/useForm'
import authService from '../../services/authService'
import TextField from '../Checkout/components/TextField'

const RegisterForm = () => {
    const { register, error, validateRegis, form } = useForm({})
    const dispatch = useDispatch();
    const handleRegister = async (e) => {
        e.preventDefault();
        const err = validateRegis();
        const backend = await authService.register(form);
        console.log(backend)
        if (Object.keys(err).length === 0) {
            try {
                if (backend?.error) {
                    throw backend?.error
                } else {

                    alert("đắng ký thành cong");


                    dispatch({
                        type: "REGISTER",
                        payload: backend?.data
                    })
                }
            }
            catch (loi) {
                alert(loi)
            }

            // return < Navigate to="/Login" />

        }
    }
    return (

        <div className='container'>
            <form
                onSubmit={handleRegister}
                className="form">
                <h1 className="h1">Register</h1>
                <div className="register__form">
                    <TextField
                        label="name"


                        {...register("name")}
                        placeHolder="name"
                        helperText={error.name}
                    />
                    <TextField
                        label="username"

                        {...register("username")}
                        placeHolder="username"
                        helperText={error.username}
                    />
                    <TextField
                        label="password"

                        type="password"
                        {...register("password")}
                        placeHolder="password"
                        helperText={error.password}
                    />
                    <TextField
                        label="confirm password"

                        type="password"
                        {...register("confirm")}
                        placeHolder="confirm password"
                        helperText={error.confirm}
                    />

                    <Button
                        children="REGISTER"
                        type="icon-right"
                        icon={<BlackRight />}
                        size="small"
                        background='bold'
                        color="white"
                        border="bold"
                    // onClick={handleRegister}
                    // {err && <p className='error-text'>{err}</p>}
                    />
                </div>
            </form>
        </div>

    )
}
export default RegisterForm