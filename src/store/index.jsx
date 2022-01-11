import { createStore, combineReducers } from "redux"
import AuthReducer from "./authenReducer"
import productReducer from "./productReducer"
import userReducer from "./userReducer"
import userService from "../services/userService"


const token = JSON.parse(localStorage.getItem("token"))

const store = createStore(
    combineReducers({
        auth: AuthReducer,
        user: userReducer,
        product: productReducer
    })/// gắn reducer
) //// tạo store
export default store
