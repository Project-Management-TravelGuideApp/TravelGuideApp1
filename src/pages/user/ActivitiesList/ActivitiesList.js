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
        </View>
    );
};

export default ActivitiesList;