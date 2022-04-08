import { createSelector, createSlice } from "@reduxjs/toolkit";
const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));
const initialState = {
  login: !!token,
  stateLogin: false,
};
const sliceSelector = (state) => state[authName];

export const stateLoginSelector = createSelector(
  sliceSelector,
  (state) => state.stateLogin
);
const {
  reducer: AuthReducer,
  actions: AuthActions,
  name: authName,
} = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("token", JSON.stringify(action.payload));
      return {
        login: !!token,
        stateLogin: true,
        loginError: false,
      };
    },
    loginError: (action) => {
      console.log(action);
      return {
        loginError: action.payload,
        stateLogin: false,
      };
    },
    setProfile: (action, state) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    logout: () => {
      localStorage.removeItem("login");
      return {
        login: !token,
        stateLogin: false,
      };
    },
    registerError: (action) => {
      return {
        registerError: action.payload,
        registerSuccess: false,
      };
    },
    registerSuccess: (acion) => {
      return {
        registerSuccess: true,
      };
    },
  },
});
export default AuthReducer;
export { AuthActions };
// export const {
//   login,
//   loginError,
//   setProfile,
//   logOut,
//   registerError,
//   registerSuccess,
// } = actions;
// const AuthReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       localStorage.setItem("token", JSON.stringify(action.payload));
//       console.log(action);
//       return {
//         login: !!token,
//         stateLogin: true,
//         loginError: false,
//       };
//     case "LOGIN_ERROR":
//       return {
//         loginError: action.payload,
//         stateLogin: false,
//       };
//     case "SET_PROFILE":
//       return {
//         ...state,
//         user: action.payload,
//       };
//     case "LOGOUT":
//       localStorage.removeItem("login");
//       return {
//         login: !token,
//         stateLogin: false,
//       };

//     case "REGISTER_ERROR":
//       return {
//         registerError: action.payload,
//         registerSuccess: false,
//       };
//     case "REGISTER_SUCCESS":
//       return {
//         registerSuccess: true,
//       };
//     // case "REGISTER":

//     //     return {

//     //         err: action.payload
//     //     }
//   }
//   return state;
// };

// export default AuthReducer;
