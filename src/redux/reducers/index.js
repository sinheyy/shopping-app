import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./prooductReducer";

// reducer 합치기

export default combineReducers({
    auth: authenticateReducer,
    product: productReducer
})