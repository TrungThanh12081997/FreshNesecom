import { createStore, combineReducers } from "redux"
import AuthReducer from "./authenReducer"

const store = createStore(
    combineReducers({
        auth: AuthReducer,
        // product: ProductReducer,

    })/// gắn reducer
) //// tạo store
export default store