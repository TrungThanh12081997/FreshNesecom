import { API } from "../constant/API"
const authService = {


    login(data) {
        return fetch(`${API}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    },


    register(data) {
        return fetch(`${API}//register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    },
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

        })
    }
}
export default authService;