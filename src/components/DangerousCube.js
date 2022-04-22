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

const DangerousCube = (props) => (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <Text style={styles.topText}>Not</Text>
        </View>
        <View style={styles.buttomContainer}>
            <Text style={styles.buttomText}>Dangeorus</Text>
        </View>
    </View>
)
export default DangerousCube;

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
        backgroundColor: colors.notDangerRisk,
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
    topText: {
        fontSize: 16,
        color: colors.notDangerRiskBold,
        textAlign: 'left',
        fontFamily: fonts.bold,
    },
});