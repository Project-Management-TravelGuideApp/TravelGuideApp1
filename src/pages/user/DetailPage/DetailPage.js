import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './DetailPage.styles';
import {ActivityDetail} from '../../../services/activitiesDetail';

const DetailPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../components/assets/back-water-blur.jpg')}
        style={styles.background}
      />

      <View style={styles.body_container}>
        <View style={styles.image_container}>
          <TouchableOpacity style={styles.maps}>
            <Image
              style={styles.img_map}
              source={require('../../../components/assets/maps.jpg')}
            />
          </TouchableOpacity>
          <Image style={styles.image} />
        </View>
        <Text style={styles.header}></Text>
        <Text style={styles.description}></Text>
      </View>
    </View>
  );
};

export default DetailPage;
