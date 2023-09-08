import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView    } from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import Input from '../../components/Input/Input'; 
import { Formik } from 'formik';
import * as yup from 'yup';
import DateTimePicker from "@react-native-community/datetimepicker";
import RedButton from "../../components/RedButton/RedButton"; 

import Config from 'react-native-config'; 
import usePost from '../../hooks/usePost/UsePost';


import styles from './Register.style';

const validationSchema = yup.object().shape({
  firstName: yup.string().required('İsim alanı zorunludur'),
  lastName: yup.string().required('Soyisim alanı zorunludur'),
  email: yup.string().email('Geçerli bir e-posta girin').required('E-posta alanı zorunludur'),
  birthDate: yup.string().required('Doğum tarihi alanı zorunludur'),
  password: yup.string().required('Şifre alanı zorunludur'),
  againPassword: yup
    .string()
    .required('Şifre tekrarı alanı zorunludur')
    .oneOf([yup.ref('password'), null], 'Şifreler eşleşmiyor'),
    acceptTerms: yup.boolean().oneOf([true], 'Lütfen şartları kabul edin'),

});

const App = ({navigation}) => {



  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const {data, loading, error, post} =  usePost();

  const handleLogin = (values) => {

  const { acceptTerms, againPassword, ...filteredValues } = values; 
  if (values.password === values.againPassword) {

    post(Config.REGISTER_URL, filteredValues);
    console.log("tıklandı", filteredValues)
    navigation.navigate("Login")
  } else {
    console.log("Form Values:", values); 
  }

  }
  
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={'height'}>
      <View style={styles.container}>
      <Text style={styles.headerTitle}>Kayıt Ol</Text>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            birthDate: '',
            password: '',
            againPassword: '',
            acceptTerms: false, 
          }}
          onSubmit={handleLogin}
          validationSchema={validationSchema}>
          {({ handleSubmit, handleChange, setFieldValue, values, errors, touched }) => (
            <View style={styles.formContainer}>
                <Text style={styles.title}>İsim</Text>
              <Input

                placeholder='İsim...'
                value={values.firstName}
                onType={handleChange('firstName')}
                errorMessage={touched.firstName && errors.firstName}
              />

            <Text style={styles.title}>Soyisim</Text>
              <Input
                placeholder='Soyisim...'
                value={values.lastName}
                onType={handleChange('lastName')}
                errorMessage={touched.lastName && errors.lastName}
              />

              <Text style={styles.title}>E-mail</Text>
              <Input
                placeholder='E-mail...'
                value={values.email}
                iconName="email"
                onType={handleChange('email')}
                errorMessage={touched.email && errors.email}
              />

              <Text style={styles.title}>Doğum Tarihi</Text>
              <Input
                placeholder='Doğum Tarihi...'
                value={values.birthDate}
                iconName="clipboard-text-clock-outline"
                onFocus={toggleDatePicker}
                errorMessage={touched.birthDate && errors.birthDate}
              />
              {showPicker && (
                <DateTimePicker
                  mode="date"
                  display="spinner"
                  value={date}
                  onChange={(event, selectedDate) => {
                    setShowPicker(false);
                    if (selectedDate) {
                      setDate(selectedDate);
                      const selectedDateString = selectedDate.toISOString().split('T')[0];
                      setFieldValue('birthDate', selectedDateString);
                    }
                  }}
                />
              )}

              <Text style={styles.title}>Şifre</Text>
              <Input
                placeholder='Şifre...'
                value={values.password}
                onType={handleChange('password')}
                iconName="lock-outline"
                hidePassword
                errorMessage={touched.password && errors.password}
              />

              <Text style={styles.title}>Tekrar Şifre</Text>
              <Input
                placeholder='Tekrar Şifre...'
                value={values.againPassword}
                iconName="lock-outline"
                onType={handleChange('againPassword')}
                hidePassword
                errorMessage={touched.againPassword && errors.againPassword}
              />
     <View style={styles.checkboxContainer}>
    <CheckBox
      value={values.acceptTerms}
      onValueChange={() => setFieldValue('acceptTerms', !values.acceptTerms)}
    />
    <Text style={styles.checkboxLabel}>
      Kişisel verilerinize dair Aydınlatma Metni için tıklayınız. Üye olmakla, Kullanım Koşulları hükümlerini kabul etmektesiniz.
    </Text>
  </View>

                <RedButton title="Üye Ol" onPress={handleSubmit}  />
                  </View>

          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
}

export default App;