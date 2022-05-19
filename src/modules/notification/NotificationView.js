import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import * as Assets from '../../../assets/utils/Assets'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { SettingsCompo, BackHeader } from "../../components";
import * as Function from './NotificationFunction'
export default function NotificationView(props) {
    return (
        <View style={styles.contentView}>
            <View style={styles.topHeader}>
                <BackHeader onClick={() => Function.onBackClick(props)} header={"Notifications"} />
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
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        // marginTop: 30
    },
    hiderHeader: {
        flex: 0.7,
        alignItems: "center",
        justifyContent: 'center',
    },
    middleView: {
        flex: 8,
        width: "100%",
        alignItems: "center",
        justifyContent: 'flex-start',
    },
})
