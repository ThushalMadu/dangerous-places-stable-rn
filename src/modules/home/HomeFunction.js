import Geolocation from '@react-native-community/geolocation';

export function getCuurentLocation(props) {
    props.setWeatherStatusAction(true)

    Geolocation.getCurrentPosition(
        position => {
            // console.log("🚀 ~ file: HomeFunction.js ~ line 6 ~ getCuurentLocation ~ position", position)
            const { latitude, longitude } = position.coords;
            props.setLatitudeAction(latitude);
            props.setLongitudeAction(longitude);
            getWeatherDetailsPlace(props)
        },
        error => {
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 10000 },
    );
}
export function onSinglePlace(props, item) {
    checkStatucFunc(props, item)
    props.setSinglePlaceAction(item)
    props.navigation.navigate('DetailPlaceScreen');

}
export function onNotification(props) {
    props.navigation.navigate('NotificationScreen');
}
export function getWeatherDetailsPlace(props) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=8ee9a1cfa5cf841442ee61d62695890b`, {
        method: 'GET',
        headers: {
            method: 'GET',
            headers: {},
        },
    })
        .then((response) => response.json())
        .then((responseJson) => {
            // console.log("🚀 ~ file: HomeFunction.js ~ line 31 ~ .then ~ responseJson", responseJson);
            props.setWeatherDetailsAction(responseJson);
            props.setWeatherConditionAction(responseJson.weather[0].main)
            getAllPlace(props)
        })
        .catch((error) => {
            alert(JSON.stringify(error));
            console.log('Output  ~ file FULL ERROR: ', error);
        });
}
export function getAllPlace(props) {
    fetch(`http://192.168.1.4:3000/danger/place`, {
        method: 'GET',
        headers: {
            method: 'GET',
            headers: {},
        },
    })
        .then((response) => response.json())
        .then((responseJson) => {
            // console.log("🚀 ~ file: HomeFunction.js ~ line 31 ~ .then ~ responseJson", responseJson);
            props.setAllPlacesAction(responseJson);
            props.setWeatherStatusAction(false);

        })
        .catch((error) => {
            // alert(JSON.stringify(error));
            console.log('Output  ~ file FULL ERROR: ', error);
        });
}

export function checkStatucFunc(props, place) {
    if (0 < place.no_injured && place.no_injured < 50) {
        props.setRiskLevelAction("Low")
    } else if (50 < place.no_injured && place.no_injured < 100) {
        props.setRiskLevelAction("Medium")
    } else if (place.no_injured > 100 && place.no_killed > 0) {
        props.setRiskLevelAction("High")
        props.setDangerStatusAction("DANGER DUE TO KILLS")
    } else {
        props.setRiskLevelAction("Determination On progress")
    }
}