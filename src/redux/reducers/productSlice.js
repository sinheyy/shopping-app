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
            /*
            if (fieldQuery == "") {
                return await response.json();
            }
            else {
                let url2 = `https://my-json-server.typicode.com/sinheyy/shopping-app/products?q=${searchQuery}`;
                let response = await fetch(url2);
                let data2 = await response.json();


                let fieldProducts = [];
                data2?.map((item) => {
                    if (item.field == fieldQuery) {
                        fieldProducts.push(item);
                    }
                });
                return fieldProducts;
            }
            */

        } catch (error) {
            thunkApi.rejectedWithValue(error.message);
        }



    }
);

export const fetchProductDetail = createAsyncThunk(
    'product/fetchDetail',
    async (id, thunkApi) => {
        try {
            let url = `https://my-json-server.typicode.com/sinheyy/shopping-app/products/${id}`;
            let response = await fetch(url);

            return await response.json();
        } catch (error) {
            thunkApi.rejectedWithValue(error.message);
        }
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
            });
        builder.addCase(fetchProductDetail.pending, (state) => {
            state.isLoading = true
        })
            .addCase(fetchProductDetail.fulfilled, (state, action) => {
                state.isLoading = false
                console.log(action.payload);
                state.selected = action.payload;
            })
            .addCase(fetchProductDetail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const productActions = productSlice.actions
export default productSlice.reducer     // reducers 아니고 reducer!!!!