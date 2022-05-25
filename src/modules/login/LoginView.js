import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView
} from 'react-native';
import * as Assets from '../../../assets/utils/Assets'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Button, TextInput } from '../../components';
import * as Function from './LoginFunction'
import NetInfo from "@react-native-community/netinfo";

export default function LoginView(props) {
    const [isOnline, setOnlineStatus] = useState(false);

    useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
            setOnlineStatus(state.isConnected)
        });

        return () => removeNetInfoSubscription();
    }, [isOnline]);
    return (
        <View style={styles.contentView}>
            <ScrollView style={styles.scrollStyle}>
                <View style={styles.contentTopView}>
                    <Image style={styles.imgStyle} source={Assets.journeyLogin} />
                </View>
                <View style={styles.contentMiddleView}>
                    <View style={styles.contentMiddleTopView}>
                        <TextInput
                            palceHolder={"Enter your Email"}
                            isSecure={false}
                            KeyBoard={'email-address'}
                            onChangeText={(text) => props.setEmailAction(text)}
                        />
                    </View>
                    <View style={styles.contentMiddleButtonView}>
                        <TextInput
                            palceHolder={"Enter your Password"}
                            isSecure={true}
                            KeyBoard={'default'}
                            onChangeText={(text) => props.setPasswordAction(text)}
                        />
                    </View>
                </View>
                <View style={styles.contentButtonView}>
                    <Button onPressButton={() => Function.onClickGetStart(props)} title={"Go to Dashboard"} />
                </View>
            </ScrollView >
        </View>
    );
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    contentTopView: {
        height: 400,
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
        width: 300,
        height: 300,
    },
    scrollStyle: {
        width: "100%",
    },
})
