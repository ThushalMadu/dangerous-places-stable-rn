import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import HomeView from './HomeView';
import * as Function from './HomeFunction';
import {
    setHomeStatusAction,
    setLatitudeAction,
    setLongitudeAction,
    setWeatherStatusAction,
    setWeatherDetailsAction,
    setAllPlacesAction,
    setSinglePlaceAction,
    setRiskLevelAction,
    setDangerStatusAction,
    setWeatherConditionAction,
    setNotificationStatusAction
} from './HomeState';

import { setSpinnerStatusAction } from '../../commonStore/CommonStore'
export default compose(
    connect(
        state => ({
            //home
            homeStatus: state.home.homeStatus,
            latitude: state.home.latitude,
            longitude: state.home.longitude,
            weatherDetails: state.home.weatherDetails,
            weatherStatus: state.home.weatherStatus,
            allPlaces: state.home.allPlaces,
            singlePlace: state.home.singlePlace,
            riskLevel: state.home.riskLevel,
            dangerStatus: state.home.dangerStatus,
            weatherCondition: state.home.weatherCondition,
            notificationStatus: state.home.notificationStatus, // This Extra Notification Status 
            // common
            spinnerStatus: state.commonStore.spinnerStatus,
        }),
        dispatch => ({
            //home
            setHomeStatusAction: homeStatus => dispatch(setHomeStatusAction(homeStatus)),
            setLatitudeAction: latitude => dispatch(setLatitudeAction(latitude)),
            setLongitudeAction: longitude => dispatch(setLongitudeAction(longitude)),
            setWeatherStatusAction: weatherStatus => dispatch(setWeatherStatusAction(weatherStatus)),
            setWeatherDetailsAction: weatherDetails => dispatch(setWeatherDetailsAction(weatherDetails)),
            setAllPlacesAction: allPlaces => dispatch(setAllPlacesAction(allPlaces)),
            setSinglePlaceAction: singlePlace => dispatch(setSinglePlaceAction(singlePlace)),
            setRiskLevelAction: riskLevel => dispatch(setRiskLevelAction(riskLevel)),
            setDangerStatusAction: dangerStatus => dispatch(setDangerStatusAction(dangerStatus)),
            setWeatherConditionAction: weatherCondition => dispatch(setWeatherConditionAction(weatherCondition)),
            setNotificationStatusAction: notificationStatus => dispatch(setNotificationStatusAction(notificationStatus)),

            //common
            setSpinnerStatusAction: status => dispatch(setSpinnerStatusAction(status)),
        }),
    ),
    lifecycle({
        componentDidMount() {
            Function.getCuurentLocation(this.props);
            // Function.getWeatherDetailsPlace(this.props);
        },
    }),
)(HomeView);
