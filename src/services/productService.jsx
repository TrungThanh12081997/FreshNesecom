import { API } from "../constant/API";
import request from "./request";
const productService = {
  getProduct(data) {
    return fetch(`${API}/product`, {
      method: "GET",
    }).then((res) => res.json());
  },
  getProductDetail(data) {
    return fetch(`${API}/product?slug=asdfasdf`, {
      method: "GET",
    }).then((res) => res.json());
  },
  // searchNameProduct(data) {
  //     return fetch(`${API}/product?name=${data}`, {
  //         method: "GET",

  //     }).then(res => res.json())
  // },
  searchNameProduct(data) {
   

    return request(`${API}/product`, {
      params: { name: data },
    });
  },
  getProductMinMax(data) {
    // return fetch(
    //   `${API}/product?minPrice=${data.minPrice}&maxPrice=${data.maxPrice}`,
    //   {
    //     method: "GET",
    //   }
    // ).then((res) => res.json());

    return request(`${API}/product`, {
      params: { minPrice: data?.minPrice, maxPrice: data?.maxPrice },
    });
  },

  getProductDefault() {
    // return fetch(`${API}/product?maxPrice=10000000`, {
    //   method: "GET",
    // }).then((res) => res.json());
    return request(`${API}/product`, {
      params: { maxPrice: 1000000000000 },
    });
  },
};
export default productService;
