import React from "react";
import { Text } from "react-native";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const coords = route.params?.coords;

  let text = "Waiting..";
  if (!coords) {
    text = "No coordinates available";
    alert(text);
    return (
      <View style={styles.container}>
        <Text>No coordinates available</Text>
      </View>
    );
  } else {
    text = JSON.stringify(coords);
    alert(text);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          ...coords,

          longitudeDelta: 0.0421,
          latitudeDelta: 0.0922,
        }}
      >
        {route.params && (
          <Marker
            title="I am here"
            coordinate={{
              // longitude: location?.longitude,
              // latitude: location?.latitude,
              longitude: coords.longitude,
              latitude: coords.latitude,
            }}
            description="Hello"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
