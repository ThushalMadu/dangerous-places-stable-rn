import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import HomeView from './HomeView';
import * as Function from './HomeFunction';
import {
    setHomeStatusAction,
    setLatitudeAction,
    setLongitudeAction
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

            //common
            setSpinnerStatusAction: status => dispatch(setSpinnerStatusAction(status)),
        }),
    ),
    lifecycle({
        componentDidMount() {
            Function.getCuurentLocation(this.props);
        },
    }),
)(HomeView);
