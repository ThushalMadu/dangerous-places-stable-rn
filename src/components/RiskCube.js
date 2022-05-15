import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
} from "react-native";
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import * as Assets from '../../assets/utils/Assets';

const RiskCube = (props) => (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <Image style={styles.imgStyle} source={Assets.danger} />
        </View>
        <View style={styles.buttomContainer}>
            <Text style={styles.buttomText}>Low Risk</Text>
        </View>
    </View>
)
export default RiskCube;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 80,
        width: Dimensions.get('screen').width / 3.3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        backgroundColor: colors.lowRisk,
        elevation: 3,
        margin: 5,
    },
    topContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttomContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttomText: {
        fontSize: 14,
        color: colors.black,
        textAlign: 'left',
        fontFamily: fonts.medium,
    },
    imgStyle: {
        width: 30,
        height: 30,
    }
});