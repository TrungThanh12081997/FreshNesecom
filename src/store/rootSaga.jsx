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
import { message} from "antd"
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* count(action) {
  yield put({
    type: "INCREMENT",
  });
}
function* fetchLogin(action) {
  try {
    const token = yield call(authService.login, action.payload);
    localStorage.setItem("token", JSON.stringify(token));
    
  } catch (err) {
 
  }
}
function* getProfile(action){
    try{
        const token=JSON.parse(localStorage.getItem("token"));
        if(token){


            const user = yield call(userService.getInfo);
            yield put ({
                type:"SET_PROFILE",
                payload:user.data
            })
        }
    }catch(err){

    }
}
/*
    Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
    Allows concurrent fetches of user.
*/
function* rootSaga() {
  yield takeEvery("COUNT", count);
  yield takeLatest("LOGIN", fetchLogin);
  yield takeEvery("SET_PROFILE", getProfile);
}

export default rootSaga;
