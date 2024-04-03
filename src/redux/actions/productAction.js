import { productActions } from "../reducers/productSlice";

// function getProducts(searchQuery, fieldQuery) {
//     return async (dispatch, getState) => {
//         let url = `https://my-json-server.typicode.com/sinheyy/shopping-app/products?q=${searchQuery}`;
//         let response = await fetch(url);

//         let data = await response.json();

//         if (fieldQuery == "") {
//             //console.log("nav bar none");
//             // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } })
//             dispatch(productActions.getAllProducts({data}));
//         }
//         else {
//             //console.log("query", fieldQuery);
//             //console.log(data);
//             let fieldProducts = [];
//             data?.map((item) => {
//                 if (item.field == fieldQuery) {
//                     //console.log("item", item);
//                     fieldProducts.push(item);
//                     //console.log("item", item);
//                 }
//             });
//             //console.log("nav bar clicked");
//             //console.log("fieldProducts", fieldProducts);
//             dispatch({ type: "GET_PRODUCT_FIELD_SUCCESS", payload: { fieldProducts } })
//         }

//     };
// }

// function getProductDetail(id) {
//     return async (dispatch, getState) => {
//         let url = `https://my-json-server.typicode.com/sinheyy/shopping-app/products/${id}`;
//         let response = await fetch(url);
//         let data = await response.json();

//         console.log(data);
//         dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: { data } })
//     };
// }

// export const productAction = { getProductDetail }