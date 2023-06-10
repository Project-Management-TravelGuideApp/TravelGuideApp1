import React from "react";
import {Text, View, Image} from 'react-native';


const DetailPage = () => {
    return(
        <View style={styles.container}>
        <Image
            source={require('../../../components/assets/     back-water-blur.jpg')}
            style={styles.background}
        />

<View style={styles.body_container}>
              <View style={styles.image_container}>
                <Image style={styles.image} />
              </View>
              <Text style={styles.header}></Text>
              <Text style={styles.description}>
              </Text>
            </View>
        </View>
    );
};

export default DetailPage;