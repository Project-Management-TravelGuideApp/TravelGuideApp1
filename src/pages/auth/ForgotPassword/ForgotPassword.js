import React from 'react';
import {Text, View} from 'react-native';
import styles from './ForgotPassword.styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import {Formik} from 'formik';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Şifremi Unuttum</Text>
      <View style={styles.body_container}>
        <Text style={styles.lineStyle}>E-Mailiniz</Text>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <Input
                value={values.mail}
                placeholder="E-Mailiniz"
                onType={handleChange('mail')}
                autoCorrect={false}
                type="email"
              />
              <Button onPress={handleSubmit} text="Gönder" />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default ForgotPassword;