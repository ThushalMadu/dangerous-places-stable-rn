import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import * as Assets from '../../assets/utils/Assets'

const HomeHeader = (props) => (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <Image style={styles.imgStyle} source={Assets.personRound} />
        </View>
        <View style={styles.MiddelContainer}>
            <View style={styles.TopMiddelContainer}>
                <Text style={styles.topText}>Welcome back 👋</Text>
            </View>
            <View style={styles.ButtomMiddelContainer}>
                <Text style={styles.buttomText}>Thushal Madhu</Text>
            </View>
        </View>
        <TouchableOpacity onPress={props.onClickNotification} style={styles.RightlContainer}>
            <Image style={styles.notImgStyle} source={Assets.notification} />
        </TouchableOpacity>
    </View>
)
export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    MiddelContainer: {
        flex: 3,
        alignItems: 'flex-start',
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
        fontFamily: fonts.medium,
    },
    imgStyle: {
        width: 50,
        height: 50,
    },
    notImgStyle: {
        width: 30,
        height: 30,
    },
});