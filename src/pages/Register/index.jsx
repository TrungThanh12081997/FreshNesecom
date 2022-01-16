import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { BlackRight } from '../../components'
import Button from '../../components/Button'
import { useForm } from '../../hooks/useForm'
import authService from '../../services/authService'
import TextField from '../Checkout/components/TextField'
import { message } from 'antd';

const RegisterForm = () => {
    const { register, error, validateRegis, form } = useForm({})
    const dispatch = useDispatch();
    const { stateLogin } = useSelector(store => store.auth);
    const handleRegister = async (e) => {
        e.preventDefault();
        const err = validateRegis();
        const backend = await authService.register(form);
        console.log(backend);
        if (Object.keys(err).length === 0) {
            try {
                if (backend?.error) {
                    throw backend?.error;

                } else {

                    message.success('Đăng ký thành công');


                    dispatch({
                        type: "LOGIN",
                        payload: {
                            accessToken: backend.data.token.accessToken,

                        }
                    })
                    /// gửi gì lên reducer,update state nào vô store,lưu data nào lên localstorage
                }
            }
            catch (err) {
                message.error(err);
            }

            // return < Navigate to="/Login" />

        }
    }
    if (stateLogin) return <Navigate to="/" />
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
                        placeHolder="Nhập tên..."
                        helperText={error.name}
                    />
                    <TextField
                        label="username"

                        {...register("username")}
                        placeHolder="Nhập username..."
                        helperText={error.username}
                    />
                    <TextField
                        label="password"

                        type="password"
                        {...register("password")}
                        placeHolder="Nhập password..."
                        helperText={error.password}
                    />
                    <TextField
                        label="confirm password"

                        type="password"
                        {...register("confirm")}
                        placeHolder="Nhập lại password..."
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