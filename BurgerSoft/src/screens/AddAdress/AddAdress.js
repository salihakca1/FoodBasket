import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native";
import { Formik } from 'formik';
import { ScrollView } from "react-native-gesture-handler";
import * as Yup from 'yup'; 
import styles from './AddAdress.style';
import Config from 'react-native-config';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('İsim alanı zorunludur'),
  surname: Yup.string().required('Soyisim alanı zorunludur'),
  number: Yup.string().required('Telefon numarası alanı zorunludur')
                      .matches(/^[0-9]+$/,'Sadece rakam giriniz'),
  location: Yup.string().required('Adres alanı zorunludur'),
});

const AddAdress = ({ navigation }) => {
  console.log(Config.API_URL);

  const handleSubmit = (values) => {
    console.log(values);
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Formik
          initialValues={{
            name: '',
            surname: '',
            number: '',
            location: '',
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
                onChangeText={handleChange('surname')}
                onBlur={handleBlur('surname')}
                value={values.surname}
                placeholder="Soy isminizi giriniz .."
              />
              {touched.surname && errors.surname && <Text style={styles.errorText}>{errors.surname}</Text>}
              <Text style={styles.textnumber}>Telefon</Text>
              <TextInput
                style={styles.number}
                onChangeText={handleChange('number')}
                onBlur={handleBlur('number')}
                value={values.number}
                keyboardType="numeric"
                placeholder="Telefon numaranızı giriniz .."
              />
              {touched.number && errors.number && <Text style={styles.errorText}>{errors.number}</Text>}
              <Text style={styles.textlocation}>Adres</Text>
              <TextInput
                multiline={true}
                style={styles.location}
                onChangeText={handleChange('location')}
                onBlur={handleBlur('location')}
                value={values.location}
                placeholder="Adresinizi giriniz .."
              />
              {touched.location && errors.location && <Text style={styles.errorText}>{errors.location}</Text>}
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
