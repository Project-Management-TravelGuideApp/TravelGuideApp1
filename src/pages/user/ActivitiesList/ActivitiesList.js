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
        </View>
    );
};

export default ActivitiesList;