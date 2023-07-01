import React from 'react';
import {Text, View} from 'react-native';
import styles from './MapPage.styles';
import MapView, {Marker} from 'react-native-maps';

const markers = [
  {
    title: 'Ben',
    coordinates: {
      latitude: 38.676945194794285,
      longitude: 39.18390362333097,
    },
  },
  {
    title: 'harput Kalesi',
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
      </MapView>
    </View>
  );
};

export default MapPage;