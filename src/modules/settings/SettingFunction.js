import { Linking } from "react-native";

export function onClickEditProfile(props) {
    props.navigation.navigate('EditdetailsScreen');
}
export function onClickNotification(props) {
    props.navigation.navigate('NotificationScreen');
}
export async function onClickPrivacyPolicy(props) {
    const supportedURL = "https://support.google.com/googleplay/answer/11416267?hl=en&visit_id=637885903101612874-1960756044&p=data-safety&rd=1";

    const supported = await Linking.canOpenURL(supportedURL);
    if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(supportedURL);
    } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
    }
}
export async function onClickAbout(props) {
    const supportedURL = "https://play.google.com/store/apps/developer?id=IHTM";

    const supported = await Linking.canOpenURL(supportedURL);
    if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(supportedURL);
    } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
    }
}