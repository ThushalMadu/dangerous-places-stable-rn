import React from "react";
import { View, StyleSheet, Text, Dimensions, FlatList } from "react-native";
import * as Assets from "../../../assets/utils/Assets";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { HomeHeader, PlaceComponent } from "../../components";

export default function DetailPlaceView(props) {
    return (
        <View style={styles.contentView}>
            <Text style={styles.cloudyText}>Detail Place</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white,
    },
    cloudyText: {
        fontSize: 18,
        color: colors.black,
        textAlign: 'left',
        fontFamily: fonts.medium,
    },
});
