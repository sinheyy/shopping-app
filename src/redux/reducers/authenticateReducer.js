let initialState = {
    email: "",
    password: "",
    authenticate: false
}

function authenticateReducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case "LOGIN_SUCCESS":
            console.log("login success reducer");
            return { ...state, email: payload.email, password: payload.password, authenticate: true };
        case "LOGOUT_SUCCESS":
            console.log("logout success reducer");
            return { ...state, email: "", password: "", authenticate: false };
        default:
            return { ...state };
    }
}

export default authenticateReducer