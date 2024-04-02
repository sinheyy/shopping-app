let initialState = {
    productList: [],
    selected: null
}

function productReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "GET_PRODUCT_SUCCESS":
            return { ...state, productList: payload.data };
        case "GET_PRODUCT_FIELD_SUCCESS":
            console.log("GET_PRODUCT_FIELD_SUCCESS reducer");
            return { ...state, productList: payload.fieldProducts };
        case "GET_PRODUCT_DETAIL_SUCCESS":
            return { ...state, selected: payload.data };
        default:
            return { ...state };
    }
}

export default productReducer