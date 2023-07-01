import React from 'react';
import {Text, View} from 'react-native';
import styles from './MapPage.styles';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const markers = [
  {
    title: 'Ben',
    coordinates: {
      latitude: 38.676945194794285,
      longitude: 39.18390362333097,
    },
  },
  {
    title: 'Harput Kalesi',
    coordinates: {
      latitude: 38.70434088711537,
      longitude: 39.25735231169615,
    },
  },
];

const MapPage = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 38.676945194794285,
          longitude: 39.18390362333097,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}>
        {markers.map(marker => (
          <Marker
            key={marker.title}
            coordinate={marker.coordinates}
            title={marker.title}
          />
        ))}
        <MapViewDirections
          origin={markers[0].coordinates}
          destination={markers[1].coordinates}
          apikey={"AIzaSyCQf6aLMv3SUZx2jzERk7Stei1lc0Ge7Yg"}
          strokeWidth={3}
          strokeColor="hotpink"
        />
      </MapView>
    </View>
  );
};

export default MapPage;