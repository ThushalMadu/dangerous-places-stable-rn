import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import LoginView from './LoginView';
import * as Function from './LoginFunction';
import {
    setLoginStatusAction
} from './LoginState';

import { setSpinnerStatusAction } from '../../commonStore/CommonStore'

export default compose(
    connect(
        state => ({
            //home
            loginStatus: state.login.loginStatus,

            // common
            spinnerStatus: state.commonStore.spinnerStatus,
        }),
        dispatch => ({
            //home
            setLoginStatusAction: loginStatus => dispatch(setLoginStatusAction(loginStatus)),

            //common
            setSpinnerStatusAction: status => dispatch(setSpinnerStatusAction(status)),
        }),
    ),
    lifecycle({
        componentDidMount() {

        },
    }),
)(LoginView);
