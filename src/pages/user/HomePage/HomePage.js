import React from 'react';
import {Text, View} from 'react-native';
import styles from './HomePage.styles';
import Dropdowns from '../../../components/Dropdowns';
import Button from '../../../components/Button';

const HomePage = () => {
  return (
    <View style={styles.container}>
            <Text style={styles.header}>HOŞGELDİNİZ</Text>
            <View style={styles.body_container}>
                <Dropdowns
                    placeholder="Şehir Seçiniz"
                />
                <Dropdowns
                    placeholder="Ne Yapmak İstiyorsunuz?"
                />
            </View>
            <View style={styles.footer_container}>
                <Button
                    text="Görüntüle"
                />
            </View>
        </View>
  );
};

export default HomePage;
