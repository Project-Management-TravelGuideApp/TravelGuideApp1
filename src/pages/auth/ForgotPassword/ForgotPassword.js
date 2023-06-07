import React from 'react';
import {Text, View} from 'react-native';
import styles from './ForgotPassword.styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";

const ForgotPassword = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Şifremi Unuttum</Text>
            <View style={styles.body_container}>
                <Text style={styles.lineStyle}>E-Mailiniz</Text>
                            <Input
                                placeholder="E-Mailiniz"
                                autoCorrect={false}
                                type="email"
                            />
                            <Button
                                text="Gönder"
                            />             
            </View> 
        </View>
    );
};

export default ForgotPassword;