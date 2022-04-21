// Initial state
const initialState = {
  homeStatus: false,
  latitude: 0,
  longitude: 0
};

// Actions
const SET_HOMESTATUS = "SET_HOMESTATUS"
const SET_LATITUDE = "SET_LATITUDE"
const SET_LONGITUDE = "SET_LONGITUDE"


export function setHomeStatusAction(homeStatus) {
  return {
    type: SET_HOMESTATUS,
    homeStatus
  };
}
export function setLatitudeAction(latitude) {
  return {
    type: SET_LATITUDE,
    latitude
  };
}
export function setLongitudeAction(longitude) {
  return {
    type: SET_LONGITUDE,
    longitude
  };
}

// set homeStatus
const setHomeStatus = (state, action) => ({
  ...state,
  homeStatus: action.homeStatus,
});
// set latitude
const setLatitude = (state, action) => ({
  ...state,
  latitude: action.latitude,
});
// set longitude
const setLongitude = (state, action) => ({
  ...state,
  longitude: action.longitude,
});


// Reducer
export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HOMESTATUS:
      return setHomeStatus(state, action)
    case SET_LATITUDE:
      return setLatitude(state, action)
    case SET_LONGITUDE:
      return setLongitude(state, action)
    default:
      return state;
  }
}
