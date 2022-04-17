// Initial state
const initialState = {
    cameraStatus: false,
};

// Actions
const SET_CAMERASTATUS = "SET_CAMERASTATUS"


export function setCameraStatusAction(cameraStatus) {
    return {
        type: SET_CAMERASTATUS,
        cameraStatus
    };
}

// set cameraStatus
const setCameraStatus = (state, action) => ({
    ...state,
    cameraStatus: action.cameraStatus,
});


// Reducer
export default function cameraReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CAMERASTATUS:
            return setCameraStatus(state, action)
        default:
            return state;
    }
}
