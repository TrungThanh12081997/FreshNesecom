const initialValue = {
  productInfo: [],
  productDetail: [],
  category: [],
  productPrice: [],
  productDefault: [],
  productSearch: [],
};
export default function productReducer(state = initialValue, action) {
  switch (action.type) {
    case "PRODUCT":
      return {
        productInfo: action.payload,
      };
    case "PRODUCT_DETAIL":
      return {
        productDetail: action.payload,
      };
    case "CATEGORY":
      return {
        category: action.payload,
      };
    case "PRODUCT_PRICE":
      return {
        productPrice: action.payload,
      };
    case "PRODUCT_DEFAULT":
     
      return {
        productDefault: action.payload,
      };
    case "PRODUCT_SEARCH":
      return {
        productSearch: action.payload,
      };
  }
  return state;
}
