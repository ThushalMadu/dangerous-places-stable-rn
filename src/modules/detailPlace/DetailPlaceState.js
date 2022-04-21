// Initial state
const initialState = {
    detailPlaceStatus: false,
};

// Actions
const SET_DETAILPLACESTATUS = "SET_DETAILPLACESTATUS"


export function setDetailPlaceStatusAction(detailPlaceStatus) {
    return {
        type: SET_DETAILPLACESTATUS,
        detailPlaceStatus
    };
}

// set detailPlaceStatus
const setDetailPlaceStatus = (state, action) => ({
    ...state,
    detailPlaceStatus: action.detailPlaceStatus,
});


// Reducer
export default function detailPlaceReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DETAILPLACESTATUS:
            return setDetailPlaceStatus(state, action)
        default:
            return state;
    }
}
