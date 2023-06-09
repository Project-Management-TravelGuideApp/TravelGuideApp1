import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './ActivitiesList.styles';

const ActivitiesList = ({route, brand, amount}) => {
  const [activity, setActivity] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');
  const [keyActivity, setKeyActivity] = useState(null);

  const [loading, setLoading] = useState(true);


  if (loading) {
    <ActivityIndicator color="green" size="large" />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../components/assets/back-gray-blur.jpg')}
        style={styles.background}
      />
      <View style={styles.header}>
        <Text style={styles.cityName}>{route.params?.selectedCity}</Text>
      </View>
      <TouchableOpacity style={styles.body_container}>
        <Text style={styles.name}>Aktivite Adı</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActivitiesList;
