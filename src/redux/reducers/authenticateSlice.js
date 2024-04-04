import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    email: "",
    password: "",
    authenticate: false
}

const authenticateSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log("login success action");
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.authenticate = true;
        },
        logout: (state, action) => {
            console.log("logout success action");
            state.authenticate = false;
        }
    },
    extraReducers: (builder) => {
    }
})

// function authenticateReducer(state = initialState, action) {
//     let { type, payload } = action
//     switch (type) {
//         case "LOGIN_SUCCESS":
//             console.log("login success reducer");
//             return { ...state, email: payload.email, password: payload.password, authenticate: true };
//         case "LOGOUT_SUCCESS":
//             console.log("logout success reducer");
//             return { ...state, email: "", password: "", authenticate: false };
//         default:
//             return { ...state };
//     }
// }

// export default authenticateReducer

export const authenticateActions = authenticateSlice.actions
export default authenticateSlice.reducer     // reducers 아니고 reducer!!!!