// Initial state
const initialState = {
    homeStatus: false,
  };
  
  // Actions
  const SET_HOMESTATUS = "SET_HOMESTATUS"
  
  
  export function setHomeStatusAction(homeStatus) {
    return {
      type: SET_HOMESTATUS,
      homeStatus
    };
  }
  
  // set homeStatus
  const setHomeStatus = (state, action) => ({
    ...state,
    homeStatus: action.homeStatus,
  });
  
  
  // Reducer
  export default function homeReducer(state = initialState, action) {
    switch (action.type) {
      case SET_HOMESTATUS:
        return setHomeStatus(state, action)
      default:
        return state;
    }
  }
  