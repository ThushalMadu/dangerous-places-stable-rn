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
            riskLevel: state.home.riskLevel,
            dangerStatus: state.home.dangerStatus,
            weatherCondition: state.home.weatherCondition,
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
            console.log("🚀 ~ file: DetailPlaceContainer.js ~ line 21 ~ riskLevel", this.props.riskLevel)
            console.log("🚀 ~ file: DetailPlaceContainer.js ~ line 22 ~ dangerStatus", this.props.dangerStatus)
        },
    }),
)(DetailPlaceView);
