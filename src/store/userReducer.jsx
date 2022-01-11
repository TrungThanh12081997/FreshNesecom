const initialValue = {
    userInfo: {}
}
export default function userReducer(state = initialValue, action) {
    switch (action.type) {
        case "GET_INFO":
            return {
                userInfo: action.payload
            }
        case "UPDATE_INFO":
            return {
                userInfo: action.payload
            }
    }
    return state
}
