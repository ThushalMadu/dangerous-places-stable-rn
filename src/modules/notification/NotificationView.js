import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import * as Assets from '../../../assets/utils/Assets'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { SettingsCompo, SettingHeader } from "../../components";

export default function NotificationView(props) {
    return (
        <View style={styles.contentView}>
            <View style={styles.topHeader}>
                <Text>This is Notification Screen</Text>
            </View>
            <View style={styles.hiderHeader}>
            </View>
            <View style={styles.middleView}>

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
        backgroundColor: colors.white
    },
    topHeader: {
        flex: 2,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 30
    },
    hiderHeader: {
        flex: 0.7,
        alignItems: "center",
        justifyContent: 'center',
    },
    middleView: {
        flex: 5,
        width: "100%",
        alignItems: "center",
        justifyContent: 'flex-start',
    },
})
