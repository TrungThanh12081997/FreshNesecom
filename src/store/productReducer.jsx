const initialValue = {
    productInfo: {},
    productDetail: {},
    category: {}
}
export default function productReducer(state = initialValue, action) {
    switch (action.type) {
        case "PRODUCT":
            return {
                productInfo: action.payload
            }
        case "PRODUCT_DETAIL":
            return {
                productDetail: action.payload
            }
        case "CATEGORY":
            return {
                category: action.payload
            }

    }
    return state
}