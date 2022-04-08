import { createStore, combineReducers, applyMiddleware } from "redux";
import AuthReducer from "./authenReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import userService from "../services/userService";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { countReducer } from "./countReducer";
import { configureStore } from "@reduxjs/toolkit";
// const token = JSON.parse(localStorage.getItem("token"));
// const sagaMiddleware = createSagaMiddleware()
// const reducer = combineReducers({
//   auth: AuthReducer,
//   user: userReducer,
//   product: productReducer,
//   count: countReducer,
// });
const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   reducer, /// gắn reducer
//   applyMiddleware(sagaMiddleware)
// ); //// tạo store

const store = configureStore({
  reducer: {
    auth: AuthReducer, // 1
    user: userReducer,
    product: productReducer,
    count: countReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
// gắn saga

export default store;
