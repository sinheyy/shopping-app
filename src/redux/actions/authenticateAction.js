function login(email, password) {
    return (dispatch, getState) => {
        console.log("login success action");
        dispatch({ type: "LOGIN_SUCCESS", payload: { email, password } });
    };
}

export const authenticateAction = { login };