import NotifService from '../../NotificationHelper/NotifService';


export function onClickGetStart(props) {
    const notif = new NotifService(
        onRegister,
        onNotif,
    );
    notif.scheduleNotif();
    props.navigation.navigate('ButtomNavigation');
}

function onRegister(token) {
    console.log("🚀 ~ file: LoginFunction.js ~ line 16 ~ onRegister ~ token", token);
}

function onNotif(notif) {
    console.log("🚀 ~ file: LoginFunction.js ~ line 21 ~ notif", notif);
}
