import {
  call,
  put,
  putResolve,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { API } from "../constant/API";
import authService from "../services/authService";
import userService from "../services/userService";
import { message } from "antd";
import { AuthActions } from "./authenReducer";
import { createAction } from "@reduxjs/toolkit";

export const loginAction = createAction("loginAction");

export const logoutAction = createAction("logoutAction");
function* count() {
  yield put({
    type: "INCREMENT",
  });
}
function* fetchLoginSaga({ payload }) {
  let res = yield call(authService.login, payload);

  if (res.message) {
    message.error(res.message);
    // yield put({
    //   type: "LOGIN_ERROR",
    //   payload: res.message,
    // });

    yield put(AuthActions.loginError(res.message));
  } else {
    message.success("Login success !");

    yield put(AuthActions.login(res));
  }
}
function* getProfile() {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      const user = yield call(userService.getInfo);
      yield put({
        type: "SET_PROFILE",
        payload: user.data,
      });
    }
  } catch (err) {}
}
function* getRegister({ form }) {
  const res = yield call(authService.register, form);

  if (res.error) {
    yield put({
      type: "REGISTER_ERROR",
      payload: res.error,
    });
  }
}
function* fetchLogoutSaga() {
  yield put(AuthActions.logout());
}
/*
    Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
    Allows concurrent fetches of user.
*/
function* rootSaga() {
  yield takeLatest("COUNT", count);
  yield takeLatest(loginAction.type, fetchLoginSaga);
  yield takeLatest(logoutAction.type, fetchLogoutSaga);
  yield takeLatest("SET_PROFILE", getProfile);
  yield takeLatest("REGISTER_SUCCESS", getRegister);
}

export default rootSaga;
