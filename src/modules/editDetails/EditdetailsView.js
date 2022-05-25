import React from "react";
import { View, StyleSheet, Text, Dimensions, ScrollView, Image } from "react-native";
import * as Assets from "../../../assets/utils/Assets";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { HomeHeader, BackHeader, Button, RiskCube, DangerousCube, TextInput } from "../../components";
import * as Function from './EditdetailsFunction';

export default function EditdetailsView(props) {
    return (
        <View style={styles.contentView}>
            <View style={styles.topHeader}>
                <BackHeader onClick={() => Function.onBackClick(props)} header={"Edit Your Account"} />
            </View>
            <View style={styles.middleView}>
                <ScrollView style={styles.scrollStyle}>
                    <View style={styles.contentTopView}>
                        <Image style={styles.imgStyle} source={Assets.hikingEdit} />
                    </View>
                    <View style={styles.contentMiddleView}>
                        <View style={styles.contentMiddleTopView}>
                            <TextInput
                                palceHolder={props.email}
                                isSecure={false}
                                KeyBoard={'email-address'}
                            // onChangeText={(text) => props.setEmailAction(text)}
                            />
                        </View>
                        <View style={styles.contentMiddleButtonView}>
                            <TextInput
                                palceHolder={props.password}
                                isSecure={true}
                                KeyBoard={'default'}
                            // onChangeText={(text) => props.setPasswordAction(text)}
                            />
                        </View>
                    </View>
                    <View style={styles.contentButtonView}>
                        <Button onPressButton={() => Function.onClickGetStart(props)} title={"Edit Done"} />
                    </View>
                </ScrollView >
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
    contentTopView: {
        height: 200,
        alignItems: "center",
        justifyContent: 'center',
    },
    contentMiddleView: {
        height: 200,
        alignItems: "center",
        justifyContent: 'center',
        width: "100%"
    },
    contentMiddleTopView: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        width: "100%"

    },
    contentMiddleButtonView: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        width: "100%"

    },
    contentButtonView: {
        height: 100,
        alignItems: "center",
        justifyContent: 'center',
        width: "100%"
    },
    imgStyle: {
        width: 200,
        height: 200,
    },
    scrollStyle: {
        width: "100%",
    },
    topHeader: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        // marginTop: 30
    },
    middleView: {
        flex: 8,
        width: "100%",
        alignItems: "center",
        justifyContent: 'center',
    },
});
