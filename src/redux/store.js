import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import authenticateSlice from "./reducers/authenticateSlice"

// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store = configureStore({
    reducer: {
        auth: authenticateSlice,
        product: productSlice
    }
})

export default store