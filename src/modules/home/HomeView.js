import React from "react";
import { View, StyleSheet, Text, Dimensions, FlatList } from "react-native";
import * as Assets from "../../../assets/utils/Assets";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { HomeHeader, PlaceComponent, HomeLoader } from "../../components";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Function from './HomeFunction';

export default function HomeView(props) {
  const { width, height } = Dimensions.get("window");
  const SCREEN_HEIGHT = height;
  const SCREEN_WIDTH = width;
  const placesList = [
    {
      id: 1,
      placeName: "Diyaluma WaterFalls",
      placeType: "Waterfall",
      riskLevel: "Low",
      imageUrl: "https://images.unsplash.com/photo-1643741444323-5dbbe8902a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGl5YWx1bWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      placeName: "Seventh Virgis Mountains",
      placeType: "Mountains",
      riskLevel: "High Risk Level",
      imageUrl: "https://www.amayaresorts.com/blog/wp-content/uploads/sites/3/2019/01/Seven-Virgins-Mountains-Sri-Lanka-Saptha-Kanya-Maskeliya.jpg",
    },
    {
      id: 3,
      placeName: "Geradi Ella",
      placeType: "Waterfall",
      riskLevel: "Medium",
      imageUrl: "https://images.unsplash.com/photo-1609681980718-340e7f4b11d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      placeName: "Dunhinda WaterFalls",
      placeType: "Waterfall",
      riskLevel: "Medium",
      imageUrl: "https://images.unsplash.com/photo-1524726240783-939bfdd633e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 5,
      placeName: "Kadiyanlena WaterFalls",
      placeType: "Waterfall",
      riskLevel: "Low",
      imageUrl: "https://images.unsplash.com/photo-1552055669-d01771d214a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    },
  ];

  function renderPlaceComponent({ item }) {
    return <PlaceComponent onClickItem={() => Function.onSinglePlace(props, item)} item={item} />;
  }

  return (
    <View style={styles.contentView}>
      <View style={styles.topContent}>
        <HomeHeader />
      </View>
      {props.weatherStatus ? (
        <View style={styles.middleContent}>
          <HomeLoader />
        </View>
      ) : (
        <View style={styles.middleContent}>
          <View style={styles.middleTopcontainer}>
            <View style={styles.middleMapTopcontainer}>
              <Text style={styles.topText}>You're in here</Text>
            </View>
            <View style={styles.middleMapMiddlecontainer}>
              <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                showsUserLocation={true}
                region={{
                  latitude: 7.9289653,
                  longitude: 81.0327647,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
                followsUserLocation={true}
                showsMyLocationButton={true}
              ></MapView>
            </View>
            <View style={styles.middleMapButtomcontainer}>
              <Text style={styles.wetherConditionText}>In your are weather condition is</Text>
              <Text style={styles.cloudyText}>{props.weatherDetails.weather[0].main} {Math.round(props.weatherDetails.main.temp - 273.15)}°</Text>
            </View>
          </View>
          <View style={styles.middleTopTextButtomcontainer}>
            <Text style={styles.buttomText}>Near Places Around You</Text>
          </View>
          <View style={styles.middleButtomcontainer}>

            <FlatList
              data={placesList}
              renderItem={renderPlaceComponent}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  topContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  middleContent: {
    flex: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  tavelText: {
    fontSize: 32,
    fontFamily: fonts.medium,
    color: colors.black,
  },
  middleTopcontainer: {
    flex: 3,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "white",
    height: "80%",
    width: "75%",
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3,
    marginTop: 10
  },
  middleMapMiddlecontainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  middleMapButtomcontainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 20
  },
  middleTopTextButtomcontainer: {
    flex: 0.6,
    alignItems: "flex-start",
    justifyContent: "center",
    alignSelf: 'stretch',
    marginLeft: 5
  },
  middleMapTopcontainer: {
    flex: 0.5,
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 20

  },
  middleButtomcontainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    height: 150,
    width: Dimensions.get("window").width / 1.1,
  },
  topText: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'left',
    fontFamily: fonts.medium,
  },
  wetherConditionText: {
    fontSize: 12,
    color: colors.alucolor,
    textAlign: 'left',
    fontFamily: fonts.medium,
  },
  cloudyText: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'left',
    fontFamily: fonts.medium,
  },
  buttomText: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'left',
    fontFamily: fonts.bold,
  },
});
