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
    rightButtomText: {
        fontSize: 14,
        color: colors.black,
        textAlign: 'left',
        fontFamily: fonts.medium,

    },
    imgStyle: {
        width: 90,
        height: 90,
    },
});