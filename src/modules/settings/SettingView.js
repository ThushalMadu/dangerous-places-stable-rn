import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import * as Assets from '../../../assets/utils/Assets'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
export default function SettingView(props) {
    return (
        <View style={styles.contentView}>
            <Text style={styles.tavelText}>Settings Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    tavelText: {
        fontSize: 32,
        fontFamily: fonts.medium,
        color: colors.black,
    },
})
