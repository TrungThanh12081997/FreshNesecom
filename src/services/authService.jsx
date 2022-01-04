import { API } from "../constant/API"
const authService = {
    login(data) {
        return fetch(`${API}/login`, {
            method: "POST",/// thêm data
            headers: {
                "Content-Type": "application/json"
            },// thể loại ra json
            body: JSON.stringify(data)
            /// chuyển json để push lên

        })
            /// dừng promise 
            .then(res => res.json())
        // .then(res=>console.log(res))
    },
    register() { },
    refreshToken() {
        const token = JSON.parse(localStorage.getItem("token"))
        return fetch(`${API}/refesh-token`, {
            method: "POST",/// thêm data
            headers: {
                "Content-Type": "application/json"
            },// thể loại ra json
            body: JSON.stringify({
                refreshToken: token.refreshToken
            }).then(res => res.json())
            /// chuyển json để push lên
        })
    }
}
export default authService;