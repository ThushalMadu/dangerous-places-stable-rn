import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Assets from '../../assets/utils/Assets';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function BackHeader(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onClick} style={styles.left}>
                <Image style={styles.imgStyle} source={Assets.back} />
            </TouchableOpacity>
            <View style={styles.middle}>
                <Text style={styles.textHospital}>{props.header}</Text>
            </View>
            <View style={styles.right}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    left: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middle: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgStyle: {
        width: 25,
        height: 25,
    },
    textHospital: {
        fontFamily: fonts.medium,
        fontSize: 16,
        color: colors.black,
        textAlign: 'center',
    },
});
