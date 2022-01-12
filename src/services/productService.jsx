import { API } from "../constant/API";
const productService = {
    getProduct(data) {

        return fetch(`${API}/product`, {
            method: "GET",
        }).then(res => res.json())
    },
    getProductDetail(data) {

        return fetch(`${API}/product?slug=asdfasdf`, {
            method: "GET",

        }).then(res => res.json())
    }
}
export default productService



