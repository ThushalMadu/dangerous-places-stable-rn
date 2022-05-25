import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import LoginView from './LoginView';
import * as Function from './LoginFunction';
import {
    setLoginStatusAction,
    setEmailAction,
    setPasswordAction
} from './LoginState';

import { setSpinnerStatusAction } from '../../commonStore/CommonStore'

export default compose(
    connect(
        state => ({
            //home
            loginStatus: state.login.loginStatus,
            email: state.login.email,
            password: state.login.password,

            // common
            spinnerStatus: state.commonStore.spinnerStatus,
        }),
        dispatch => ({
            //home
            setLoginStatusAction: loginStatus => dispatch(setLoginStatusAction(loginStatus)),
            setEmailAction: email => dispatch(setEmailAction(email)),
            setPasswordAction: password => dispatch(setPasswordAction(password)),

            //common
            setSpinnerStatusAction: status => dispatch(setSpinnerStatusAction(status)),
        }),
    ),
    lifecycle({
        componentDidMount() {
            this.props.setEmailAction("")
            this.props.setPasswordAction("")
        },
    }),
)(LoginView);
