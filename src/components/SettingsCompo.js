import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import * as Assets from '../../assets/utils/Assets';


const SettingsCompo = (props) => (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            {props.settingsType == "editProfile" ? (
                <View style={[styles.iconContainer, { backgroundColor: colors.laPurple }]}>
                    <Image style={styles.imgStyle} source={Assets.user} />
                </View>
            ) : props.settingsType == "notification" ? (
                <View style={[styles.iconContainer, { backgroundColor: colors.laBlue }]}>
                    <Image style={styles.imgStyle} source={Assets.bell} />
                </View>
            ) : props.settingsType == "privacy" ? (
                <View style={[styles.iconContainer, { backgroundColor: colors.laOrange }]}>
                    <Image style={styles.imgStyle} source={Assets.privacy} />
                </View>
            ) : (
                <View style={[styles.iconContainer, { backgroundColor: colors.laRed }]}>
                    <Image style={styles.imgStyle} source={Assets.info} />
                </View>
            )}
        </View>
        <View style={styles.middleContainer}>
            <Text style={styles.middleText}>{props.settingsName}</Text>
        </View>
        <View style={styles.rigthContainer}>
            <View style={styles.nextContainer}>
                <Image style={styles.imgNextStyle} source={Assets.next} />
            </View>
        </View>
    </View>
);
export default SettingsCompo;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 70,
        width: Dimensions.get("window").width / 1.1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    leftContainer: {
        flex: 1.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    middleContainer: {
        flex: 3,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    rigthContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgStyle: {
        width: 25,
        height: 25,
    },
    imgNextStyle: {
        width: 20,
        height: 20,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.laOrange,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nextContainer: {
        width: 35,
        height: 35,
        borderRadius: 5,
        backgroundColor: colors.lacolor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    middleText: {
        fontSize: 16,
        color: colors.black,
        textAlign: 'left',
        fontFamily: fonts.medium,
    },
});