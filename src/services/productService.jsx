import { API } from "../constant/API";
const productService = {
    getProduct(data) {
        const token = JSON.parse(localStorage.getItem("token"));
        return fetch(`${API}/product`, {
            method: "GET",
        }).then(res => res.json())
    },
    getProductDetail(data) {
        const token = JSON.parse(localStorage.getItem("token"));
        return fetch(`${API}/product?slug=asdfasdf`, {
            method: "GET",
            // headers: {
            //     "Authorization": `Bearer ${token.accessToken}`
            // },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }
}
export default productService



