// Initial state
const initialState = {
  homeStatus: false,
  latitude: 0,
  longitude: 0,
  weatherDetails: {},
  weatherStatus: true
};

// Actions
const SET_HOMESTATUS = "SET_HOMESTATUS"
const SET_LATITUDE = "SET_LATITUDE"
const SET_LONGITUDE = "SET_LONGITUDE"
const SET_WEATHERSTATUS = "SET_WEATHERSTATUS"
const SET_WEATHERDETAILS = "SET_WEATHERDETAILS"


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
export function setWeatherStatusAction(weatherStatus) {
  return {
    type: SET_WEATHERSTATUS,
    weatherStatus
  };
}
export function setWeatherDetailsAction(weatherDetails) {
  return {
    type: SET_WEATHERDETAILS,
    weatherDetails
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
const setWeatherStatus = (state, action) => ({
  ...state,
  weatherStatus: action.weatherStatus,
});
const setWeatherDetails = (state, action) => ({
  ...state,
  weatherDetails: action.weatherDetails,
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
    case SET_WEATHERSTATUS:
      return setWeatherStatus(state, action)
    case SET_WEATHERDETAILS:
      return setWeatherDetails(state, action)
    default:
      return state;
  }
}
