import Geolocation from '@react-native-community/geolocation';

export function getCuurentLocation(props) {
    Geolocation.getCurrentPosition(
        position => {
            console.log("🚀 ~ file: HomeFunction.js ~ line 6 ~ getCuurentLocation ~ position", position)
            const { latitude, longitude } = position.coords;
            props.setLatitudeAction(latitude);
            props.setLongitudeAction(longitude);
            getWeatherDetailsPlace(props)
        },
        error => {
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
}
export function onSinglePlace(props) {
    props.navigation.navigate('DetailPlaceScreen');

}
export function getWeatherDetailsPlace(props) {
    props.setWeatherStatusAction(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=8ee9a1cfa5cf841442ee61d62695890b`, {
        method: 'GET',
        headers: {
            method: 'GET',
            headers: {},
        },
    })
        .then((response) => response.json())
        .then((responseJson) => {
            props.setWeatherStatusAction(false)
            console.log("🚀 ~ file: HomeFunction.js ~ line 31 ~ .then ~ responseJson", responseJson);
            props.setWeatherDetailsAction(responseJson);
        })
        .catch((error) => {
            alert(JSON.stringify(error));
            console.log('Output  ~ file FULL ERROR: ', error);
        });
}