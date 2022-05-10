import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import HomeView from './HomeView';
import * as Function from './HomeFunction';
import {
    setHomeStatusAction,
    setLatitudeAction,
    setLongitudeAction,
    setWeatherStatusAction,
    setWeatherDetailsAction
} from './HomeState';

import { setSpinnerStatusAction } from '../../commonStore/CommonStore'
export default compose(
    connect(
        state => ({
            //home
            homeStatus: state.home.homeStatus,
            latitude: state.home.latitude,
            longitude: state.home.longitude,
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
