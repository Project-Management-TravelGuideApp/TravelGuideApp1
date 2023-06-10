import React from "react";
import {Text, View, Image} from 'react-native';


const DetailPage = () => {
    return(
        <View style={styles.container}>
        <Image
            source={require('../../../components/assets/     back-water-blur.jpg')}
            style={styles.background}
        />
        </View>
    );
};

export default DetailPage;