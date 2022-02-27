import { createStore, combineReducers, applyMiddleware } from "redux";
import AuthReducer from "./authenReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import userService from "../services/userService";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { countReducer } from "./countReducer";

// const token = JSON.parse(localStorage.getItem("token"));
// const sagaMiddleware = createSagaMiddleware()
const reducer = combineReducers({
  auth: AuthReducer,
  user: userReducer,
  product: productReducer,
  count: countReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer, /// gắn reducer
  applyMiddleware(sagaMiddleware)
); //// tạo store
sagaMiddleware.run(rootSaga);
// gắn saga

export default store;
