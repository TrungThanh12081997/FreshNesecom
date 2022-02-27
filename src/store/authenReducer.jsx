const user = JSON.parse(localStorage.getItem("user"))
// const token = JSON.parse(localStorage.getItem("token"))
const initialState = {
    // login: !!token,
    stateLogin: false,


}
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":

            localStorage.setItem("token", JSON.stringify(action.payload))
            return {
                // login: !!token,
                stateLogin: true
            }
        case "SET_PROFILE":
            return {
                ...state,
                user:action.payload
            }
        case "LOGOUT":
            localStorage.removeItem("login")
            return {
                // login: !token,
                stateLogin: false
            }
        // case "REGISTER":

        //     return {
              

        //         err: action.payload
        //     }
    }
    return state;
}


export default AuthReducer;

