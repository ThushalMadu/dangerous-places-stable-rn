import { combineReducers } from 'redux';

// ## Generator common Reducer Imports
import commonStore from '../commonStore/CommonStore'
import home from '../modules/home/HomeState';
import startUp from '../modules/startUp/StartupState';
import login from '../modules/login/LoginState';
import setting from '../modules/settings/SettingState';
import camera from '../modules/camera/CameraState';
import detailPlace from '../modules/detailPlace/DetailPlaceState';


export default combineReducers({
  //## Generator Reducers
  home,
  startUp,
  login,
  setting,
  camera,
  commonStore,
  detailPlace
});
