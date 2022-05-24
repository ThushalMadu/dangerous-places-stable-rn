import Geolocation from '@react-native-community/geolocation';
import NotifService from '../../NotificationHelper/NotifService';

export async function getCuurentLocation(props) {
    props.setWeatherStatusAction(true)

    Geolocation.getCurrentPosition(
        position => {
            const { latitude, longitude } = position.coords;
            props.setLatitudeAction(latitude);
            props.setLongitudeAction(longitude);
            getWeatherDetailsPlace(props, latitude, longitude)
        },
        error => {
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 10000 },
        // { enableHighAccuracy: false, timeout: 5000, maximumAge: 10000 },

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


export function getWeatherDetailsPlace(props, latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8ee9a1cfa5cf841442ee61d62695890b`, {
        method: 'GET',
        headers: {
            method: 'GET',
            headers: {},
        },
    })
        .then((response) => response.json())
        .then((responseJson) => {
            props.setWeatherDetailsAction(responseJson);
            props.setWeatherConditionAction(responseJson.weather[0].main)
            getAllPlace(props, latitude, longitude)
        })
        .catch((error) => {
            alert(JSON.stringify(error));
            console.log('Output  ~ file FULL ERROR: ', error);
        });
}
export function getAllPlace(props, latitude, longitude) {
    fetch(`http://192.168.1.4:3000/danger/place`, {
        method: 'GET',
        headers: {
            method: 'GET',
            headers: {},
        },
    })
        .then((response) => response.json())
        .then(async responseJson => {
            await responseJson.forEach(function (itm) {
                itm.distanceCurrentLocation = distance(latitude, longitude, itm.latitude, itm.longitude, "K");
            });
            onSetDangerPlacesNotification(responseJson)
            props.setAllPlacesAction(responseJson);
            props.setWeatherStatusAction(false);
        })
        .catch((error) => {
            // alert(JSON.stringify(error));
            console.log('Output  ~ file FULL ERROR: ', error);
        });
}


function distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1 / 180
    var radlat2 = Math.PI * lat2 / 180
    var theta = lon1 - lon2
    var radtheta = Math.PI * theta / 180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    if (unit == "K") { dist = dist * 1.609344 }
    if (unit == "M") { dist = dist * 0.8684 }
    return round(dist)
}


function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}


export function checkStatucFunc(props, place) {
    if (0 < place.no_injured && place.no_injured < 50) {
        props.setRiskLevelAction("Low")
    } else if (50 < place.no_injured && place.no_injured < 100) {
        props.setRiskLevelAction("Medium")
    } else if (place.no_injured > 100 && place.no_killed > 0) {
        props.setRiskLevelAction("High")
        props.setDangerStatusAction("DANGER DUE TO KILLS")
        props.setNotificationStatusAction(true);
    } else {
        props.setRiskLevelAction("Determination On progress")
    }
}

export function onClickMapAllView(props) {
    props.navigation.navigate('MapScreen');

}


function onSetDangerPlacesNotification(responseJson) {
    if (responseJson.filter(e => e.no_killed > 0).length > 0) {
        console.log("This is True Notification")
        const notif = new NotifService();
        notif.localSecheduleDangerousNotif();
    }
}