import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import NotificationView from './NotificationView';
import * as Function from './NotificationFunction';
import {
    setNotificationStatusAction
} from './NotificationState';

import { setSpinnerStatusAction } from '../../commonStore/CommonStore'

export default compose(
    connect(
        state => ({
            //home
            notificationStatus: state.notification.notificationStatus,

            // common
            spinnerStatus: state.commonStore.spinnerStatus,
        }),
        dispatch => ({
            //home
            setNotificationStatusAction: notificationStatus => dispatch(setNotificationStatusAction(notificationStatus)),

            //common
            setSpinnerStatusAction: status => dispatch(setSpinnerStatusAction(status)),
        }),
    ),
    lifecycle({
        componentDidMount() {

        },
    }),
)(NotificationView);
