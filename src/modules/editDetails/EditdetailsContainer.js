import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import EditdetailsView from './EditdetailsView';
import * as Function from './EditdetailsFunction';
import {
    setEditDetailsStatusAction
} from './EditdetailsState';

import { setSpinnerStatusAction } from '../../commonStore/CommonStore'

export default compose(
    connect(
        state => ({
            //editDetails
            editDetailsStatus: state.editDetails.editDetailsStatus,

            // common
            spinnerStatus: state.commonStore.spinnerStatus,

            //login
            email: state.login.email,
            password: state.login.password,
        }),
        dispatch => ({
            //editDetails
            setEditDetailsStatusAction: editDetailsStatus => dispatch(setEditDetailsStatusAction(editDetailsStatus)),

            //common
            setSpinnerStatusAction: status => dispatch(setSpinnerStatusAction(status)),
        }),
    ),
    lifecycle({
        componentDidMount() {

        },
    }),
)(EditdetailsView);
