import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, ActivityIndicator, Alert, ScrollView} from 'react-native';
import styles from './ActivitiesList.styles';
import {Activity} from '../../../services/activities';
import firestore from '@react-native-firebase/firestore';

const ActivitiesList = ({route, brand, amount}) => {
  const [activity, setActivity] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');
  const [keyActivity, setKeyActivity] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      route.params.selectedActivities == 'Spor Aktiviteleri' &&
      route.params.selectedCity == 'Elazığ'
    ) {
      Activity.getActivitiesSports()
        .then(act => {
          setActivity(act), setLoading(false);
        })
        .catch(err => Alert.alert(err.code, err.message));
    } else if (
      route.params.selectedActivities == 'Tarihi Yerler' &&
      route.params.selectedCity == 'Elazığ'
    ) {
      Activity.getActivitiesHistoric()
        .then(act => {
          setActivity(act), setLoading(false);
        })
        .catch(err => Alert.alert(err.code, err.message));
    } else if (
      route.params.selectedActivities == 'Müzeler' &&
      route.params.selectedCity == 'Elazığ'
    ) {
      Activity.getActivitiesMuseum()
        .then(act => {
          setActivity(act), setLoading(false);
        })
        .catch(err => Alert.alert(err.code, err.message));
    } else {
      Activity.getActivitiesEat()
        .then(act => {
          setActivity(act), setLoading(false);
        })
        .catch(err => Alert.alert(err.code, err.message));
    }
  });

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

      <ScrollView>
        {activity &&
          activity.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={styles.body_container}
              onPress={() =>
                navigation.navigate({
                  params: data.name,
                  merge: true,
                })
              }>
              <Image style={styles.image} source={{uri: data.imgUrl}} />
              <Text style={styles.name}>{data.name}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default ActivitiesList;
