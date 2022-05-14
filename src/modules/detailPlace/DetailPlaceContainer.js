import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import DetailPlaceView from './DetailPlaceView';
import * as Function from './DetailPlaceFunction';
import {
    setDetailPlaceStatusAction
} from './DetailPlaceState';

import { setSpinnerStatusAction } from '../../commonStore/CommonStore'

export default compose(
    connect(
        state => ({
            //detailPlace
            detailPlaceStatus: state.detailPlace.detailPlaceStatus,

            // common
            spinnerStatus: state.commonStore.spinnerStatus,
            singlePlace: state.home.singlePlace,

        }),
        dispatch => ({
            //detailPlace
            setDetailPlaceStatusAction: detailPlaceStatus => dispatch(setDetailPlaceStatusAction(detailPlaceStatus)),

            //common
            setSpinnerStatusAction: status => dispatch(setSpinnerStatusAction(status)),
        }),
    ),
    lifecycle({
        componentDidMount() {

        },
    }),
)(DetailPlaceView);
