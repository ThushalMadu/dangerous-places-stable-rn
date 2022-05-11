import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import * as Assets from '../../assets/utils/Assets'
import LottieView from 'lottie-react-native';

export default function HomeLoader(props) {
    return (
        <LottieView style={styles.imgStyle} source={Assets.loaderHome} autoPlay loop />
    );
}

const styles = StyleSheet.create({
    imgStyle: {
        width: 150,
        height: 150
    }
});
