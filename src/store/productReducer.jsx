const initialValue = {
    productInfo: {}
}

export default function productReducer(state = initialValue, action) {
    switch (action.type) {
        case "PRODUCT":
            return {
                productInfo: action.payload
            }
        case "PRODUCT_DETAIL":
            return {
                productInfo: action.payload
            }
        case "CATEGORY":
            return {
                productInfo: action.payload
            }
    }
    return state
}

