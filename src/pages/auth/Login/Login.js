import {Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Login.styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";

const Login = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Giriş Ekranı</Text>

        <View style={styles.body_container}>
                <Text style={styles.lineStyle}>E-Mailiniz</Text>
                <Input 
                    placeholder="E-Mailiniz"
                    autoCorrect={false} 
                    type="email"
                />
                <Text style={styles.lineStyle}>Şifreniz</Text>
                <Input
                    placeholder="Şifreniz"
                    secureTextEntry={true}
                    autoCorrect={false}
                />
                <Button 
                    text="Giriş Yap" 
                    loading={loading}
                />
                <TouchableOpacity
                  loading={loading}
                >
                  <Text style={styles.question_text}>Şifremi unuttum</Text>
                </TouchableOpacity>
        </View>
      </View>
  );
};

export default Login;
