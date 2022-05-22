import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import MapScreen from './MapScreen';
import * as Function from './MapFunction';
import {
    setMapStatusAction
} from './MapState';

export default compose(
    connect(
        state => ({
            //map
            mapStatus: state.map.mapStatus,

            //home
            allPlaces: state.home.allPlaces,

        }),
        dispatch => ({
            //camera
            setMapStatusAction: mapStatus => dispatch(setMapStatusAction(mapStatus)),
        }),
    ),
    lifecycle({
        componentDidMount() {

        },
    }),
)(MapScreen);
