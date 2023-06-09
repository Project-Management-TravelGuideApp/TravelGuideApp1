import React from "react";
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './ActivitiesList.styles';


const ActivitiesList = () => {
    return(
        <View style={styles.container}>
        <Image
          source={require('../../../components/assets/back-gray-blur.jpg')}
          style={styles.background}
        />
        <View style={styles.header}>
        <Text style={styles.cityName}>Elazığ</Text>
        </View>
        <TouchableOpacity
              style={styles.body_container}
>
              <Text style={styles.name}>Aktivite Adı</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ActivitiesList;