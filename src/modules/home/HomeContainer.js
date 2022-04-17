import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import HomeView from './HomeView';
import * as Function from './HomeFunction';
import {
    setHomeStatusAction
} from './HomeState';

import { setSpinnerStatusAction } from '../../commonStore/CommonStore'

export default compose(
    connect(
        state => ({
            //home
            homeStatus: state.home.homeStatus,
            
            // common
            spinnerStatus: state.commonStore.spinnerStatus,
        }),
        dispatch => ({
            //home
            setHomeStatusAction: homeStatus => dispatch(setHomeStatusAction(homeStatus)),

            //common
            setSpinnerStatusAction: status => dispatch(setSpinnerStatusAction(status)),
        }),
    ),
    lifecycle({
        componentDidMount() {

        },
    }),
)(HomeView);
