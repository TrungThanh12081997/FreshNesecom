import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { BlackRight, WhiteRight } from "../../components";
import Button from "../../components/Button";
import { useForm } from "../../hooks/useForm";
import authService from "../../services/authService";
import TextField from "../Checkout/components/TextField";
import { message } from "antd";
import banner1 from "../../assets/img/banner1.jpg";
import Navigator from "../../components/Navigator";
import { stateLoginSelector } from "../../store/authenReducer";

const RegisterForm = () => {
  const { register, error, validateRegis, form } = useForm({});
  const dispatch = useDispatch();
  const { stateLogin, registerError, registerSuccess } =
    useSelector(store=> store.auth);
  const handleRegister = async (e) => {
    e.preventDefault();
    const err = validateRegis();
    const backend = await authService.register(form);
    console.log(backend);
    if (Object.keys(err).length === 0) {
      // try {
      //     if (backend?.error) {
      //         throw backend?.error;

      //     } else {

      //         message.success('Đăng ký thành công');

      //         dispatch({
      //             type: "LOGIN",
      //             payload: {
      //                 accessToken: backend.data.token.accessToken,

      //             }
      //         })
      //         /// gửi gì lên reducer,update state nào vô store,lưu data nào lên localstorage
      //     }
      // }
      // catch (err) {
      //     message.error(err);
      // }

      // return < Navigate to="/Login" />

      if (registerError) {
        message.error(registerError);
      } else {
        dispatch({
          type: "REGISTER_SUCCESS",
          payload: form,
        });
        message.success("Register successfully !");
      }
    }
  };
  if (registerSuccess) return <Navigate to="/login" />;
  return (
    <div className="container-fluid">
      <Navigator />
      <form onSubmit={handleRegister} className="form">
        <div className="flex">
          <div className="register__banner">
            <img src={banner1} alt="" className="" />
          </div>

          <div className="register__form">
            <h1 className="h1">Register</h1>
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

            <button className="login-register">
              Đăng Ký <WhiteRight />{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
