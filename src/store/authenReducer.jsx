

const user = JSON.parse(localStorage.getItem('login'))

const initialState = {
    login: !!user,
    user
}
const AuthReducer = (state = initialState, action) => {

    //// setState đặt trong đây phải k An
    switch (action.type) {
        case "LOGIN":
            return {
                login: true,
                user: {
                    name: "quantrung thanh",
                    ...action.payload
                }
            }
        case "LOGOUT":
            localStorage.removeItem("login")
            return {
                login: false,
                user: null
            }
    }
    return state;
}

export default AuthReducer;
// // // /cách lấy là const {user,llogin} = useSelector(store=>store.auth)