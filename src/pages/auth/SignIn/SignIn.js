import {Text, View} from 'react-native';
import React from 'react';
import styles from './SignIn.styles';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kayıt Ekranı</Text>


            <Text style={styles.lineStyle}>Adınız</Text>
            <Input
              placeholder="Adınız"
            />
            {console.log('username:',values.username)}
            <Text style={styles.lineStyle}>Soyadınız</Text>
            <Input
              placeholder="Soyadınız"
            />
            {console.log('surname:',values.surname)}
            <Text style={styles.lineStyle}>E-Mailiniz</Text>
            <Input
              placeholder="E-Mailiniz"
              type="email"
              
            />
             {console.log('mail:',values.usermail)}
            <Text style={styles.lineStyle}>Şifreniz</Text>
            <Input
              value={values.password}
              onType={handleChange('password')}
              placeholder="Şifreniz"
              secureTextEntry={true}
            />
            {console.log('password:',values.password)}
            <Text style={styles.lineStyle}>Şifrenizin Tekrarı</Text>
            <Input
              placeholder="Şifrenizin Tekrarı"
            />
            {console.log('againPassword:',values.againPassword)}
            <Button 
              text="Kayıt Ol" 
              loading={loading} 
            />

        

    </View>
  );
};

export default SignIn;
