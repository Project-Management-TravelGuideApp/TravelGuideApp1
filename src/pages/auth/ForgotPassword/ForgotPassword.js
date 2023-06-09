import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './ForgotPassword.styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';

const initialFormValues = {
  mail: '',
};

const ForgotPassword = ({navigation}) => {
  const [mail, setMail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth()
        .sendPasswordResetEmail(formValues.mail)
        .then(() => {
          showMessage({
            message:
              'Mail Hesabınıza Sıfırlama Maili Gönderilmiştir.Lütfen Mail Kutunuzu Kontrol Ediniz!',
            type: 'success',
          });
        })
        .catch(error => {
          const errorMessage = error.message;
          showMessage({
            message: errorMessage,
            type: 'danger',
          });
        });
      setLoading(false);
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  };

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
