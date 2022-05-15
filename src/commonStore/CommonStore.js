// Initial state
const initialState = {
    spinnerStatus: false,
};

// Actions
const SET_SPINNER_STATUS = "SET_SPINNER_STATUS"

export function setSpinnerStatusAction(status) {
    return {
        type: SET_SPINNER_STATUS,
        status: status
    };
}

const setSpinnerStatus = (state, action) => ({
    ...state,
    spinnerStatus: action.status,
});

// Reducer
export default function commonReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SPINNER_STATUS:
            return setSpinnerStatus(state, action)
        default:
            return state;
    }
}
