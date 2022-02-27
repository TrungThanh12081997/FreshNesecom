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
    },
    // searchNameProduct(data) {
    //     return fetch(`${API}/product?name=${data}`, {
    //         method: "GET",

    //     }).then(res => res.json())
    // },
    searchNameProduct(data) {
        return fetch(`${API}/product?name=${data}`, {
            method: "GET",

        }).then(res => res.json());
    },
    getProductMinMax(data) {
        return fetch(`${API}/product?minPrice=${data.minPrice}&maxPrice=${data.maxPrice}`, {
            method: "GET",

        }).then(res => res.json())
    },

    getProductDefault(data) {
        return fetch(`${API}/product?maxPrice=10000000000000000000000000000000`, {
            method: "GET",

        }).then(res => res.json())
    }
}
export default productService



