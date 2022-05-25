// Initial state
const initialState = {
    editDetailsStatus: false,
};

// Actions
const SET_EDITDETAILSSTATUS = "SET_EDITDETAILSSTATUS"


export function setEditDetailsStatusAction(detailPlaceStatus) {
    return {
        type: SET_EDITDETAILSSTATUS,
        editDetailsStatus
    };
}

// set editDetailsStatus
const setEditDetailsStatus = (state, action) => ({
    ...state,
    editDetailsStatus: action.editDetailsStatus,
});


// Reducer
export default function editDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_EDITDETAILSSTATUS:
            return setEditDetailsStatus(state, action)
        default:
            return state;
    }
}
