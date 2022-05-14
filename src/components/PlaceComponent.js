import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native";
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import * as Assets from '../../assets/utils/Assets';

const PlaceComponent = (props) => (
    <TouchableOpacity onPress={props.onClickItem} style={styles.container}>
        <View style={styles.leftContainer}>
            <Image
                // resizeMode={'contain'}
                style={styles.imgStyle}
                source={{ uri: props.item.images[0].img_url }}
            />
        </View>
        <View style={styles.rightContainer}>
            <View style={styles.rightTopContainer}>
                <Text style={styles.rightTopText}>{props.item.placeName}</Text>
            </View>
            <View style={styles.rightMiddleContainer}>
                <Text style={styles.rightMiddleText}>{props.item.state}</Text>
            </View>
            <View style={styles.rightButtomContainer}>
                {0 < props.item.no_injured < 50 ? (
                    <Text style={styles.rightButtomTextLow}>Low</Text>

                ) : 51 < props.item.no_injured < 100 ? (
                    <Text style={styles.rightButtomTextMedium}>Medium</Text>

                ) : 101 < props.item.no_injured < 150 ? (
                    <Text style={styles.rightButtomTextHigh}>High</Text>

                ) : (
                    <Text style={styles.rightButtomTextMedium}>_</Text>
                )
                }
            </View>
        </View>
    </TouchableOpacity>
)
export default PlaceComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        backgroundColor: colors.white,
        elevation: 3,
        margin: 5,
        width: Dimensions.get('screen').width - 50,
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
        flex: 0.4,
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
    rightButtomTextLow: {
        fontSize: 14,
        color: colors.black,
        textAlign: 'left',
        fontFamily: fonts.medium,

    },
    rightButtomTextMedium: {
        fontSize: 14,
        color: colors.shoppingbuttonColor,
        textAlign: 'left',
        fontFamily: fonts.medium,

    },
    rightButtomTextHigh: {
        fontSize: 14,
        color: colors.animered,
        textAlign: 'left',
        fontFamily: fonts.medium,

    },
    imgStyle: {
        width: 90,
        height: 90,
    },
});