// Initial state
const initialState = {
    loginStatus: false,
};

// Actions
const SET_LOGINSTATUS = "SET_LOGINSTATUS"


export function setLoginStatusAction(loginStatus) {
    return {
        type: SET_LOGINSTATUS,
        loginStatus
    };
}

// set loginStatus
const setLoginStatus = (state, action) => ({
    ...state,
    loginStatus: action.loginStatus,
});


// Reducer
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGINSTATUS:
            return setLoginStatus(state, action)
        default:
            return state;
    }
}
