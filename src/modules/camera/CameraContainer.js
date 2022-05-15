import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import CameraView from './CameraView';
import * as Function from './CameraFunction';
import {
    setCameraStatusAction
} from './CameraState';

import { setSpinnerStatusAction } from '../../commonStore/CommonStore'

export default compose(
    connect(
        state => ({
            //camera
            cameraStatus: state.camera.cameraStatus,

            // common
            spinnerStatus: state.commonStore.spinnerStatus,
        }),
        dispatch => ({
            //camera
            setCameraStatusAction: cameraStatus => dispatch(setCameraStatusAction(cameraStatus)),

            //common
            setSpinnerStatusAction: status => dispatch(setSpinnerStatusAction(status)),
        }),
    ),
    lifecycle({
        componentDidMount() {

        },
    }),
)(CameraView);
