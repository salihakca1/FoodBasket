import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native";
import { Formik } from 'formik'; 
import styles from './AddAdress.style';
import { ScrollView } from "react-native-gesture-handler";

const AddAdress = () => {
  const handleSubmit = (values) => {
    console.log(values); 
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          number: '',
          location: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
        <KeyboardAvoidingView style={{flex:1}} behavior="padding">  
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
            <Text style={styles.textsurname}>Soy isim</Text>
            <TextInput
              style={styles.surname}
              onChangeText={handleChange('surname')}
              onBlur={handleBlur('surname')}
              value={values.surname}
              placeholder="Soy isminizi giriniz .."
            />
            <Text style={styles.textnumber}>Telefon</Text>
            <TextInput
              style={styles.number}
              onChangeText={handleChange('number')}
              onBlur={handleBlur('number')}
              value={values.number}
              placeholder="Telefon numaranızı giriniz .."
            />
            <Text style={styles.textlocation}>Adres</Text>
            <TextInput
              multiline={true}
              style={styles.location}
              onChangeText={handleChange('location')}
              onBlur={handleBlur('location')}
              value={values.location}
              placeholder="Adresinizi giriniz .."
            />
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.button}
            >
              <Text style={styles.buttontext}>Ekle</Text>
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </View>
  );
};

export default AddAdress;
