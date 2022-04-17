import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import * as Assets from '../../../assets/utils/Assets'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Button, TextInput } from '../../components';

export default function LoginView(props) {
    return (
        <View style={styles.contentView}>
            <View style={styles.contentTopView}>
                <Image style={styles.imgStyle} source={Assets.journeyLogin} />
            </View>
            <View style={styles.contentMiddleView}>
                <View style={styles.contentMiddleTopView}>
                    <TextInput
                        palceHolder={"Enter your Email"}
                        isSecure={false}
                        KeyBoard={'email-address'}
                        onChangeText={(text) => console.log("first")}
                    />
                </View>
                <View style={styles.contentMiddleButtonView}>
                    <TextInput
                        palceHolder={"Enter your Password"}
                        isSecure={false}
                        KeyBoard={'default'}
                        onChangeText={(text) => console.log("first")}
                    />
                </View>
            </View>
            <View style={styles.contentButtonView}>
                <Button onPressButton={() => Function.onClickGetStart(props)} title={"Go to Dashboard"} />
            </View>
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
        flex: 3,
        alignItems: "center",
        justifyContent: 'center',
    },
    contentMiddleView: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        width: "100%"
    },
    contentMiddleTopView: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        width: "85%"

    },
    contentMiddleButtonView: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        width: "85%"

    },
    contentButtonView: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        width: "90%"
    },
    imgStyle: {
        width: 250,
        height: 250,
    },
})
