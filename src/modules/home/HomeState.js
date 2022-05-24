// Initial state
const initialState = {
  homeStatus: false,
  latitude: 0,
  longitude: 0,
  weatherDetails: {},
  weatherStatus: true,
  notificationStatus: false, // This Extra Notification Status 
  allPlaces: [],
  singlePlace: {},
  riskLevel: "",
  dangerStatus: "",
  weatherCondition: "",
};

// Actions
const SET_HOMESTATUS = "SET_HOMESTATUS"
const SET_LATITUDE = "SET_LATITUDE"
const SET_LONGITUDE = "SET_LONGITUDE"
const SET_WEATHERSTATUS = "SET_WEATHERSTATUS"
const SET_WEATHERDETAILS = "SET_WEATHERDETAILS"
const SET_ALLPLACES = "SET_ALLPLACES"
const SET_SINGLEPLACE = "SET_SINGLEPLACE"
const SET_RISKLEVEL = "SET_RISKLEVEL"
const SET_DANGERSTATUS = "SET_DANGERSTATUS"
const SET_WEATHERCONDITION = "SET_WEATHERCONDITION"
const SET_NOTIFICATIONSTATUS = "SET_NOTIFICATIONSTATUS"


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
export function setAllPlacesAction(allPlaces) {
  return {
    type: SET_ALLPLACES,
    allPlaces
  };
}
export function setSinglePlaceAction(singlePlace) {
  return {
    type: SET_SINGLEPLACE,
    singlePlace
  };
}
export function setRiskLevelAction(riskLevel) {
  return {
    type: SET_RISKLEVEL,
    riskLevel
  };
}
export function setDangerStatusAction(dangerStatus) {
  return {
    type: SET_DANGERSTATUS,
    dangerStatus
  };
}
export function setWeatherConditionAction(weatherCondition) {
  return {
    type: SET_WEATHERCONDITION,
    weatherCondition
  };
}
export function setNotificationStatusAction(notificationStatus) {
  return {
    type: SET_NOTIFICATIONSTATUS,
    notificationStatus
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
const setAllPlaces = (state, action) => ({
  ...state,
  allPlaces: action.allPlaces,
});
const setSinglePlace = (state, action) => ({
  ...state,
  singlePlace: action.singlePlace,
});
const setRiskLevel = (state, action) => ({
  ...state,
  riskLevel: action.riskLevel,
});
const setDangerStatus = (state, action) => ({
  ...state,
  dangerStatus: action.dangerStatus,
});
const setWeatherCondition = (state, action) => ({
  ...state,
  weatherCondition: action.weatherCondition,
});
const setNotificationStatus = (state, action) => ({
  ...state,
  notificationStatus: action.notificationStatus,
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
    case SET_ALLPLACES:
      return setAllPlaces(state, action)
    case SET_SINGLEPLACE:
      return setSinglePlace(state, action)
    case SET_RISKLEVEL:
      return setRiskLevel(state, action)
    case SET_DANGERSTATUS:
      return setDangerStatus(state, action)
    case SET_WEATHERCONDITION:
      return setWeatherCondition(state, action)
    case SET_NOTIFICATIONSTATUS:
      return setNotificationStatus(state, action)
    default:
      return state;
  }
}
