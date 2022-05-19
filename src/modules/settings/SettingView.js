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
import * as Function from './SettingFunction';

export default function SettingView(props) {
    return (
        <View style={styles.contentView}>
            <View style={styles.topHeader}>
                <SettingHeader />
            </View>
            <View style={styles.hiderHeader}>
            </View>
            <View style={styles.middleView}>
                <SettingsCompo onClickItem={() => Function.onClickEditProfile(props)} settingsName={"Edit Profile"} settingsType={"editProfile"} />
                <SettingsCompo onClickItem={() => Function.onClickNotification(props)} settingsName={"Notification"} settingsType={"notification"} />
                <SettingsCompo onClickItem={() => Function.onClickPrivacyPolicy(props)} settingsName={"Privacy & Policy"} settingsType={"privacy"} />
                <SettingsCompo onClickItem={() => Function.onClickAbout(props)} settingsName={"About us"} settingsType={"personRound"} />
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
