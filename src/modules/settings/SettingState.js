// Initial state
const initialState = {
    settingStatus: false,
};

// Actions
const SET_SETTINGSTATUS = "SET_SETTINGSTATUS"


export function setSettingStatusAction(settingStatus) {
    return {
        type: SET_SETTINGSTATUS,
        settingStatus
    };
}

// set settingStatus
const setSettingStatus = (state, action) => ({
    ...state,
    settingStatus: action.settingStatus,
});


// Reducer
export default function settingReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SETTINGSTATUS:
            return setSettingStatus(state, action)
        default:
            return state;
    }
}
