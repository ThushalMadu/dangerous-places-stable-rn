import Geolocation from '@react-native-community/geolocation';

export function getCuurentLocation(props) {
    Geolocation.getCurrentPosition(
        position => {
            console.log("🚀 ~ file: HomeFunction.js ~ line 6 ~ getCuurentLocation ~ position", position)
            const { latitude, longitude } = position.coords;
            props.setLatitudeAction(latitude);
            props.setLongitudeAction(longitude);
        },
        error => {
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
}