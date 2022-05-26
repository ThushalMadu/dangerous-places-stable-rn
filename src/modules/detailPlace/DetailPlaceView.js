import React from "react";
import { View, StyleSheet, Text, Dimensions, ScrollView, Image } from "react-native";
import * as Assets from "../../../assets/utils/Assets";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { HomeHeader, BackHeader, WeatherCube, RiskCube, DangerousCube } from "../../components";
import * as Function from './DetailPlaceFunction';

export default function DetailPlaceView(props) {
    return (
        <View style={styles.contentView}>
            <View style={styles.topContentView}>
                <BackHeader onClick={() => Function.onBackClick(props)} header={"Place Details"} />
            </View>
            <View style={styles.buttomContentView}>
                <ScrollView style={styles.scrollStyle}>
                    <View style={styles.buttomTopLayer}>
                        <Image style={styles.imgStyle} source={{ uri: props.singlePlace.images[0].img_url }} />
                    </View>
                    <View style={styles.buttomMiddleLayer}>
                        <View style={[styles.buttomMiddleTitleLayer, { marginTop: 20 }]}>
                            <Text style={styles.titleText}>{props.singlePlace.placeName}</Text>
                        </View>
                        <View style={styles.buttomMiddleTabView}>
                            {props.singlePlace.dangerWeather == props.weatherCondition ? (
                                <WeatherCube weatherCondition={"Bad Weather Place"} />
                            ) : (
                                <WeatherCube weatherCondition={props.weatherCondition} />
                            )}
                            <RiskCube riskType={props.riskLevel} />
                            <DangerousCube danger={props.riskLevel == "High" ? true : false} />
                        </View>
                    </View>
                    <View style={styles.buttomYataLayer}>
                        <View style={styles.buttomMiddleTitleLayer}>
                            <Text style={styles.titleDesText}>Description</Text>
                        </View>
                        <View style={styles.buttomYataTitleDes}>
                            <Text style={styles.fullDesText}>{props.singlePlace.location_description}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
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
    topContentView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white,
    },
    scrollStyle: {
        width: "100%",
    },
    buttomContentView: {
        flex: 9,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        // backgroundColor: colors.white,
    },
    buttomTopLayer: {
        height: Dimensions.get("window").height / 2,
        alignItems: "center",
        justifyContent: "center",

        width: "100%",

    },
    buttomMiddleLayer: {
        height: 150,
        alignItems: "center",
        justifyContent: "center",

        width: "100%",

    },
    buttomYataLayer: {
        height: 200,
        alignItems: "center",
        justifyContent: "center",

        width: "100%",

    },
    cloudyText: {
        fontSize: 18,
        color: colors.black,
        textAlign: 'left',
        fontFamily: fonts.medium,
    },
    imgStyle: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 2,
    },
    buttomMiddleTitleLayer: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        alignSelf: 'stretch',
        marginLeft: 20
    },
    buttomYataTitleDes: {
        flex: 6,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        alignSelf: 'stretch',
        marginTop: 10,
        marginLeft: 20
    },
    buttomMiddleTabView: {
        flex: 6,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginHorizontal: 10
    },
    titleText: {
        fontSize: 18,
        color: colors.black,
        textAlign: 'left',
        fontFamily: fonts.bold,
    },
    titleDesText: {
        fontSize: 16,
        color: colors.black,
        textAlign: 'left',
        fontFamily: fonts.medium,
    },
    fullDesText: {
        fontSize: 14,
        color: colors.black,
        textAlign: 'left',
        fontFamily: fonts.medium,
    },
});
