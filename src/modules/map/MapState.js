// Initial state
const initialState = {
    mapStatus: false,
};

// Actions
const SET_MAPSTATUS = "SET_MAPSTATUS"


export function setMapStatusAction(mapStatus) {
    return {
        type: SET_MAPSTATUS,
        mapStatus
    };
}

// set mapStatus
const setMapStatus = (state, action) => ({
    ...state,
    mapStatus: action.mapStatus,
});


// Reducer
export default function mapReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MAPSTATUS:
            return setMapStatus(state, action)
        default:
            return state;
    }
}
