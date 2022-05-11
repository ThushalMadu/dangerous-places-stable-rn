// Initial state
const initialState = {
    notificationStatus: false,
};

// Actions
const SET_NOTIFICATIONSTATUS = "SET_NOTIFICATIONSTATUS"


export function setNotificationStatusAction(settingStatus) {
    return {
        type: SET_NOTIFICATIONSTATUS,
        notificationStatus
    };
}

// set notificationStatus
const setNotificationStatus = (state, action) => ({
    ...state,
    notificationStatus: action.notificationStatus,
});


// Reducer
export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NOTIFICATIONSTATUS:
            return setNotificationStatus(state, action)
        default:
            return state;
    }
}
