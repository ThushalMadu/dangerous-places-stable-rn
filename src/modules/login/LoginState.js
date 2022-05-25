// Initial state
const initialState = {
    loginStatus: false,
    email: "",
    password: "",
};

// Actions
const SET_LOGINSTATUS = "SET_LOGINSTATUS"
const SET_EMAIL = "SET_EMAIL"
const SET_PASSWORD = "SET_PASSWORD"


export function setLoginStatusAction(loginStatus) {
    return {
        type: SET_LOGINSTATUS,
        loginStatus
    };
}
export function setEmailAction(email) {
    return {
        type: SET_EMAIL,
        email
    };
}
export function setPasswordAction(password) {
    return {
        type: SET_PASSWORD,
        password
    };
}

// set loginStatus
const setLoginStatus = (state, action) => ({
    ...state,
    loginStatus: action.loginStatus,
});
// set email
const setEmail = (state, action) => ({
    ...state,
    email: action.email,
});
// set password
const setPassword = (state, action) => ({
    ...state,
    password: action.password,
});


// Reducer
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGINSTATUS:
            return setLoginStatus(state, action)
        case SET_EMAIL:
            return setEmail(state, action)
        case SET_PASSWORD:
            return setPassword(state, action)
        default:
            return state;
    }
}
