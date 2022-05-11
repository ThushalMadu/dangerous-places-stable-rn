import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import * as Assets from '../../assets/utils/Assets'
import LottieView from 'lottie-react-native';

export default function DangerLoader(props) {
    return (
        <LottieView style={styles.imgStyle} source={Assets.dangerLoader} autoPlay loop />
    );
}

const styles = StyleSheet.create({
    imgStyle: {
        width: Dimensions.get('screen').width - 50,
        height: 80
    }
});
