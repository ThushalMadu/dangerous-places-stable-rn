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

const PlaceComponent = (props) => (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <Image
                // resizeMode={'contain'}
                style={styles.imgStyle}
                source={{ uri: props.item.imageUrl }}
            />
        </View>
        <View style={styles.rightContainer}>
            <View style={styles.rightTopContainer}>
                <Text style={styles.rightTopText}>{props.item.placeName}</Text>
            </View>
            <View style={styles.rightMiddleContainer}>
                <Text style={styles.rightMiddleText}>{props.item.placeType}</Text>
            </View>
            <View style={styles.rightButtomContainer}>
                <Text style={styles.rightButtomText}>{props.item.riskLevel}</Text>
            </View>
        </View>
    </View>
)
export default PlaceComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 80,
        width: Dimensions.get("window").width / 1.1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    leftContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightTopContainer: {
        flex: 1,
        alignItems: 'flex-start',
        width: "100%",
        justifyContent: 'center'
    },
    rightMiddleContainer: {
        flex: 1,
        alignItems: 'flex-start',
        width: "100%",
        justifyContent: 'center'
    },
    rightButtomContainer: {
        flex: 1,
        alignItems: 'flex-start',
        width: "100%",
        justifyContent: 'center'
    },
    rightTopText: {
        fontSize: 16,
        color: colors.black,
        textAlign: 'left',
        fontFamily: fonts.medium,
    },
    rightMiddleText: {
        fontSize: 14,
        color: colors.black,
        textAlign: 'left',
        fontFamily: fonts.regular,
    },
    rightButtomText: {
        fontSize: 16,
        color: colors.black,
        textAlign: 'left',
        fontFamily: fonts.medium,

    },
    imgStyle: {
        width: 90,
        height: 75,
    },
});