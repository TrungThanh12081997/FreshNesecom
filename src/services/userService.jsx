import { API } from "../constant/API";
const userService = {
    getInfo() {
        const token = JSON.parse(localStorage.getItem("token"));
        return fetch(`${API}/user/get-info`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token.accessToken}`
            },
        }).then(res => res.json())
    },
    updateInfo(data) {
        const token = JSON.parse(localStorage.getItem("token"));
        return fetch(`${API}/user/update`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token.accessToken}`
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    },


}
export default userService;