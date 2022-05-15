import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import StartupView from './StartupView';
import * as Function from './StartupFunction';
import {
    setStartUpStatusAction
} from './StartupState';

import { setSpinnerStatusAction } from '../../commonStore/CommonStore'

export default compose(
    connect(
        state => ({
            //home
            startUpStatus: state.startUp.startUpStatus,
            
            // common
            spinnerStatus: state.commonStore.spinnerStatus,
        }),
        dispatch => ({
            //home
            setStartUpStatusAction: startUpStatus => dispatch(setStartUpStatusAction(startUpStatus)),

            //common
            setSpinnerStatusAction: status => dispatch(setSpinnerStatusAction(status)),
        }),
    ),
    lifecycle({
        componentDidMount() {

        },
    }),
)(StartupView);
