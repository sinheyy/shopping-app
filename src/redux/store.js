import { configureStore } from "@reduxjs/toolkit";
import Slice from "./reducers/productSlice";
import authenticateReducer from "./reducers/authenticateReducer"

// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store = configureStore({
    reducer: {
        auth: authenticateReducer,
        product: Slice
    }
})

export default store