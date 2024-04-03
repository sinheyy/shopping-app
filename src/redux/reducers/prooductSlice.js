import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    productList: [],
    selected: null,
    isLoading: false,
    error: null
}

export const fetchProducts = createAsyncThunk(
'product/fetchAll',
    async (searchQuery, fieldQuery, thunkApi) => {
        try {
            let url = `https://my-json-server.typicode.com/sinheyy/shopping-app/products?q=${searchQuery}`;
            let response = await fetch(url);

            return await response.json();
        } catch (error) {
            thunkApi.rejectedWithValue(error.message);
        }


        /*
        if (fieldQuery == "") {
            //console.log("nav bar none");
            // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } })
            dispatch(productActions.getAllProducts({data}));
        }
        else {
            //console.log("query", fieldQuery);
            //console.log(data);
            let fieldProducts = [];
            data?.map((item) => {
                if (item.field == fieldQuery) {
                    //console.log("item", item);
                    fieldProducts.push(item);
                    //console.log("item", item);
                }
            });
            //console.log("nav bar clicked");
            //console.log("fieldProducts", fieldProducts);
            dispatch({ type: "GET_PRODUCT_FIELD_SUCCESS", payload: { fieldProducts } })
        }
        */
    }
);

// function Slice(state = initialState, action) {
//     let { type, payload } = action;
//     switch (type) {
//         case "GET_PRODUCT_SUCCESS":
//             return { ...state, productList: payload.data };
//         case "GET_PRODUCT_FIELD_SUCCESS":
//             console.log("GET_PRODUCT_FIELD_SUCCESS reducer");
//             return { ...state, productList: payload.fieldProducts };
//         case "GET_PRODUCT_DETAIL_SUCCESS":
//             return { ...state, selected: payload.data };
//         default:
//             return { ...state };
//     }
// }

// export default Slice

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

        getSingleProduct(state, action) {
            state.selected = action.payload.data;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            // 로딩 스피너
            state.isLoading = true
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.productList = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const productActions = productSlice.actions
export default productSlice.reducer     // reducers 아니고 reducer!!!!