import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import * as Assets from '../../../assets/utils/Assets'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { HomeHeader } from '../../components';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


export default function HomeView(props) {
  const { width, height } = Dimensions.get('window')
  const SCREEN_HEIGHT = height
  const SCREEN_WIDTH = width

  return (
    <View style={styles.contentView}>
      <View style={styles.topContent}>
        <HomeHeader />
      </View>
      <View style={styles.middleContent}>
        <View style={styles.container}>
          {/* <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            showsUserLocation={true}
            region={{
              latitude: 7.9289653,
              longitude: 81.0327647,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          </MapView> */}
        </View>
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
  topContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 20,
  },
  middleContent: {
    flex: 9,
    alignItems: "center",
    justifyContent: 'center',
  },
  tavelText: {
    fontSize: 32,
    fontFamily: fonts.medium,
    color: colors.black,
  },
  container: {
    height: 200,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
