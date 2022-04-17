// Initial state
const initialState = {
    startUpStatus: false,
  };
  
  // Actions
  const SET_STARTUPSTATUS = "SET_STARTUPSTATUS"
  
  
  export function setStartUpStatusAction(startUpStatus) {
    return {
      type: SET_STARTUPSTATUS,
      startUpStatus
    };
  }
  
  // set homeStatus
  const setStartUpStatus = (state, action) => ({
    ...state,
    startUpStatus: action.startUpStatus,
  });
  
  
  // Reducer
  export default function startUpReducer(state = initialState, action) {
    switch (action.type) {
      case SET_STARTUPSTATUS:
        return setStartUpStatus(state, action)
      default:
        return state;
    }
  }
  