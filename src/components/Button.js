import React from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function Button(props) {
    return (
        <TouchableOpacity style={styles.getStartbutton} onPress={props.onPressButton}>
            <Text style={styles.getStartText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    getStartbutton: {
        backgroundColor: colors.green,
        height: 50,
        width: "70%",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        alignItems: 'center',
        elevation: 8,
    },
    getStartText: {
        fontSize: 18,
        color: colors.white,
        textAlign: 'center',
        fontFamily: fonts.regular,
        textAlignVertical: 'center',
    },

});



















