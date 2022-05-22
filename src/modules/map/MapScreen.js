import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import * as Assets from '../../../assets/utils/Assets'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Button, TextInput, BackHeader } from '../../components';
import * as Function from './MapFunction'
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default function MapScreen(props) {

    return (
        <View style={styles.contentView}>
            <View style={styles.contentTopView}>
                <BackHeader onClick={() => Function.onBackClick(props)} header={"All Places Map Details"} />
            </View>
            <View style={styles.contentMiddleView}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: 7.4099102,
                        longitude: 80.65747,
                        latitudeDelta: 1,
                        longitudeDelta: 1,
                    }}
                >
                    {props.allPlaces.map(place => (
                        <Marker
                            title={place.placeName}
                            //   image={flagPinkImg}
                            key={place._id}
                            coordinate={{
                                latitude: place.latitude,
                                longitude: place.longitude
                            }}
                        />
                    ))}
                </MapView>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        alignItems: "center",
        width: '100%',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    contentTopView: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    contentMiddleView: {
        flex: 6,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    contentButtomView: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 1.2,
    }
})
