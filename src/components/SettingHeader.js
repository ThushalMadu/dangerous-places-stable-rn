import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import * as Assets from '../../assets/utils/Assets'

const SettingHeader = (props) => (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <Image style={styles.imgStyle} source={Assets.personSettings} />
        </View>
        <View style={styles.MiddelContainer}>
            <Text style={styles.buttomText}>Thushal Madhushnakha</Text>
        </View>
        <View style={styles.RightlContainer}>
        </View>
    </View>
)
export default SettingHeader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    MiddelContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TopMiddelContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ButtomMiddelContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    RightlContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topText: {
        fontSize: 14,
        color: colors.alucolor,
        textAlign: 'left',
        fontFamily: fonts.regular,
    },
    buttomText: {
        fontSize: 18,
        color: colors.black,
        textAlign: 'left',
        fontFamily: fonts.bold,
    },
    imgStyle: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    notImgStyle: {
        width: 30,
        height: 30,
    },
});