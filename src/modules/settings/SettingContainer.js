import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import SettingView from './SettingView';
import * as Function from './SettingFunction';
import {
    setSettingStatusAction
} from './SettingState';

import { setSpinnerStatusAction } from '../../commonStore/CommonStore'

export default compose(
    connect(
        state => ({
            //home
            settingStatus: state.setting.settingStatus,

            // common
            spinnerStatus: state.commonStore.spinnerStatus,
        }),
        dispatch => ({
            //home
            setSettingStatusAction: settingStatus => dispatch(setSettingStatusAction(settingStatus)),

            //common
            setSpinnerStatusAction: status => dispatch(setSpinnerStatusAction(status)),
        }),
    ),
    lifecycle({
        componentDidMount() {

        },
    }),
)(SettingView);
