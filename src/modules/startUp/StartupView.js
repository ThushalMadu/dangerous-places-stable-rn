import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import * as Assets from '../../../assets/utils/Assets'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
export default function StartupView(props) {
    return (
        <View style={styles.contentView}>
            <View style={styles.contentTopView}>
                <View style={styles.contentTopLeftView}>
                    <Text style={styles.tavelText}>Travel</Text>
                </View>
                <View style={styles.contentTopRightView}>
                    <Text style={styles.safeText}>Safety</Text>
                </View>
            </View>
            <View style={styles.contentMedimView}>
                <Image style={styles.imgStyle} source={Assets.stratupPage} />
            </View>
            <View style={styles.contentButtomView}>

            </View>
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
    contentTopView: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-start',
        flexDirection: "row",
    },
    contentTopLeftView: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: 'center',
        marginRight: 5,
    },
    contentTopRightView: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: 'center',
    },
    contentMedimView: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    contentButtomView: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    tavelText: {
        fontSize: 32,
        fontFamily: fonts.medium,
        color: colors.black,
    },
    safeText: {
        fontSize: 32,
        fontFamily: fonts.medium,
        color: colors.green,
    },
    imgStyle: {
        width: 235,
        height: 200,
    },
})
