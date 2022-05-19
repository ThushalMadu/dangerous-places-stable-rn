import React from 'react';
import { View, Platform, StyleSheet, TextInput } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
const RNSTextInput = ({
    type,
    dark,
    style,
    isSecure,
    sttype,
    KeyBoard,
    Capitalize,
    FocusKeyboard,
    palceHolder,
    border,
    placeholderTextColor,
    ...restProps
}) => {
    // const textstyle = [
    //     sttype == 'centerText' ? styles.mdlplcordr : styles.textinpu,
    // ];
    // const borderTextStyle = [
    //     border == 'kotu' ? styles.boarderKotuBar : styles.boarderBar,
    // ];
    return (
        <View style={styles.boarderBar}>
            <TextInput
                placeholder={palceHolder}
                secureTextEntry={isSecure}
                autoCapitalize={Capitalize}
                keyboardType={KeyBoard}
                placeholderTextColor={colors.placeblack}
                {...restProps}
                style={styles.textinpu}
            />
            {Platform.OS === 'ios' && (
                <View style={{ height: 0.5, backgroundColor: colors.black }} />
            )}
        </View>
    );
};
const styles = StyleSheet.create({

    containerBorder: {
        borderBottomColor: colors.black,
        borderBottomWidth: 0.7,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textinpu: {
        fontSize: 14,
        height: 55,
        color: colors.black,
        textAlign: 'left',
        marginLeft: 20,
        fontFamily: fonts.regular,

    },
    mdlplcordr: {
        fontSize: 16,
        height: 55,
        color: colors.black,
        fontFamily: fonts.regular,
        textAlign: 'center',
    },
    boarderBar: {
        alignItems: "flex-start",
        justifyContent: "center",
        width: "85%",
        height: 50,
        borderColor: colors.placeblack,
        borderWidth: 1,
        borderRadius: 13,
    },
    boarderKotuBar: {
        alignItems: "center",
        justifyContent: "center",
        width: "60%",
        height: 50,
        borderColor: colors.placeblack,
        borderWidth: 1,
    }

});

export default RNSTextInput;
