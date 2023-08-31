import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native";
import { Formik } from 'formik';
import { ScrollView } from "react-native-gesture-handler";
import * as Yup from 'yup'; 
import styles from './AddAdress.style';
import Config from 'react-native-config';

import usePost from '../../hooks/usePost/UsePost';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('İsim alanı zorunludur'),
  lastName: Yup.string().required('Soyisim alanı zorunludur'),
  phoneNumber: Yup.string().required('Telefon numarası alanı zorunludur')
                      .matches(/^[0-9]+$/,'Sadece rakam giriniz'),
  description: Yup.string().required('Adres alanı zorunludur'),
});

const AddAdress = ({ navigation }) => {
  const {data, loading, error, post} =  usePost();


  const handleSubmit = (values) => {
    post(Config.ADD_ADDRESS, values);

    console.log(values);
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Formik
          initialValues={{
            name: '',
            lastName: '',
            phoneNumber: '',
            description: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema} 
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
              <Text style={styles.header}> Adres Ekle</Text>
              <Text style={styles.textname}>İsim</Text>
              <TextInput
                style={styles.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="İsminizi giriniz .."
              />
              {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
              <Text style={styles.textsurname}>Soy isim</Text>
              <TextInput
                style={styles.surname}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
                placeholder="Soy isminizi giriniz .."
              />
              {touched.lastName && errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
              <Text style={styles.textnumber}>Telefon</Text>
              <TextInput
                style={styles.number}
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                keyboardType="numeric"
                placeholder="Telefon numaranızı giriniz .."
              />
              {touched.phoneNumber && errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}
              <Text style={styles.textlocation}>Adres</Text>
              <TextInput
                multiline={true}
                style={styles.location}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                placeholder="Adresinizi giriniz .."
              />
              {touched.description && errors.description && <Text style={styles.errorText}>{errors.description}</Text>}
              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.button}
              >
                <Text style={styles.buttontext}>Ekle</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default AddAdress;
