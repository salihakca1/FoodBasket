import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import Input from "../../components/RegisterInput/RegisterInput";
import { Formik } from 'formik';
import * as yup from 'yup';

import DateTimePicker from "@react-native-community/datetimepicker";
import Button from "../../components/RedButton/RedButton";

import RegisterButton from '../../components/RegisterButton/RegisterButton';

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
});

const App = () => {

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  function handleLogin(values) {
    // Post işlemleri burada gerçekleştirilebilir
  

    if (values.password === values.againPassword) {
      const { againPassword, ...filteredValues } = values;
      console.log("Form Values:", filteredValues);
    } else {
      // İki alan aynı değilse, tüm değerleri gönder
      console.log("Form Values:", values); 
    }
  
  }

  return(

    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={'height'}
  >
      <View style={styles.container}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          birthDate: '',
          password: '',
          againPassword: '',
        }}
        onSubmit={handleLogin}
        validationSchema={validationSchema} >
        {({ handleSubmit, handleChange, setFieldValue, values, errors, touched }) => (
          <View>
            <Input
              placeholder='Lütfen boş bırakmayınız.'
              labelText="İsim"
              value={values.firstName}
              onType={handleChange('firstName')}
              errorMessage={(touched.firstName && errors.firstName) || ''}
               
              />
            {values.firstNameError && <Text style={{ color: 'red' }}>{values.firstNameError}</Text>}

            <Input
              placeholder='Lütfen boş bırakmayınız.'
              labelText="Soyisim"
              value={values.lastName}
              onType={handleChange('lastName')}
              errorMessage={(touched.lastName && errors.lastName) || ''}
                
              />
            {values.lastNameError && <Text style={{ color: 'red' }}>{values.lastNameError}</Text>}

            <Input
              placeholder='Lütfen boş bırakmayınız.'
              labelText="E-Posta"
              value={values.email}
              iconName="email"
              onType={handleChange('email')}
              errorMessage={(touched.email && errors.email) || ''}
             
            />
            {values.emailError && <Text style={{ color: 'red' }}>{values.emailError}</Text>}

            <Input
              labelText= "Doğum Tarihi"
              placeholder='Lütfen boş bırakmayınız.'
              value={values.birthDate}
              iconName="clipboard-text-clock-outline"
              onFocus={toggleDatePicker}
              errorMessage={(touched.birthDate && errors.birthDate) || ''}
            
            />
            {values.birthDateError && <Text style={{ color: 'red' }}>{values.birthDateError}</Text>}

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


            <Input
              placeholder='Lütfen boş bırakmayınız.'
              labelText="Şifre"
              value={values.password}
              onType={handleChange('password')}
              iconName="lock-outline"
              hidePassword
              errorMessage={(touched.password && errors.password) || ''}
            
            />
            {values.passwordError && <Text style={{ color: 'red' }}>{values.passwordError}</Text>}

            <Input
              placeholder='Lütfen boş bırakmayınız.'
              labelText="Şifre Tekrar"
              value={values.againPassword}
              iconName="lock-outline"
              onType={handleChange('againPassword')}
              hidePassword
              errorMessage={(touched.againPassword && errors.againPassword) || ''}
              
            />
            {values.againPasswordError && <Text style={{ color: 'red' }}>{values.againPasswordError}</Text>}
            
            <RegisterButton text = "Üye Ol" onPress= {handleSubmit} ></RegisterButton>

          </View>
            )}
            </Formik>
            </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  formContainer: {
    alignItems: 'center',
  },
});

export default App;