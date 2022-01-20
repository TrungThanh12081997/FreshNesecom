import React from 'react'
import 'antd/dist/antd.css';
import { message } from 'antd';
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import authService from '../../services/authService'
import TextField from '../Checkout/components/TextField'
import "./style.scss"
import { Alert } from 'antd';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import banner from "../../assets/img/login.jpg"
import banner1 from "../../assets/img/banner1.jpg"
import { BlackRight, WhiteRight } from '../../components'
import Navigator from '../../components/Navigator';
// import 'antd/dist/antd.css';
export default function Login() {
    const { register, form, error, validateLogin, setError } = useForm({
        username: "",
        password: ""
    })

    const dispatch = useDispatch();
    const { stateLogin } = useSelector(store => store.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const error = validateLogin()
        if (Object.keys(error).length === 0) {
            try {
                const backend = await authService.login(form);
                if (backend?.message) {
                    throw backend?.message;
                    message.error(backend.message);

                } else {
                    dispatch({
                        type: "LOGIN",
                        payload: backend
                    })
                    message.success('Đăng nhập thành công');

                }
            } catch (err) {
                console.log('err :>> ', err);
                message.error(err);
            }
        }
    }
    if (stateLogin) return <Navigate to="/" />

    return (
        <div className='container-fluid'>
            <Navigator />
            <form onSubmit={handleSubmit} className="form">


                <div className="flex">
                    <div className="register__banner">
                        <img src={banner1} alt="" className="" />
                    </div>

                    <div className="register__form">
                        <h1 className="h1">Login </h1>
                        <TextField
                            label="username"
                            firstNameRegister
                            {...register("username")}
                            placeHolder="Nhập username..."
                            helperText={error.username}
                        />
                        <TextField
                            label="password"
                            firstNameRegister
                            type="password"
                            {...register("password")}
                            placeHolder="Nhập password..."
                            helperText={error.password}
                        />
                        {/* <label className="form">
                        <h1 className="">username</h1>
                        <input type="text" value={form.username} className="" />
                        <p className="error">{error.username}</p>
                    </label>
                    <label className="form">
                        <h1 className="">password</h1>
                        <input type="text" value={form.password} className="" />
                        <p className="error">{error.password}</p>
                    </label> */}
                        {/* {error && <p className='error-text'>username hoặc password không đúng</p>} */}
                        {/* <Button
                        children="LOGIN"
                        type="icon-right"
                        icon={<BlackRight />}
                        size="small"
                        background='green'
                        color="black"
                        border="bold"
                    /> */}
                        <button className='login-register'

                        >Đăng Nhập <WhiteRight /> </button>
                    </div>
                </div>
            </form>
        </div>



    )
}

