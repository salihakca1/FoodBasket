import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Login.style";
import RedButton from "../../components/RedButton";
import Input from "../../components/Input";
import { Formik } from "formik";
import Config from 'react-native-config'; 
import usePost from '../../hooks/usePost/UsePost';
import { useDispatch } from 'react-redux';

import { setToken, setUser } from '../../redux/userSlicer'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('Geçerli bir e-posta girin').required('E-posta alanı zorunludur'),
  password: yup.string().required('Şifre alanı zorunludur'),
});

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const { data, loading, error, post } = usePost();

  const handleLogin = async (values) => {
    post(Config.LOGIN_URL, values);
  
    if (data && data.data) {
      const token = data.data.token;
      const user = data.data.user;
      
      dispatch(setToken(token));
      dispatch(setUser(user)); 

      if(token){
        navigation.navigate("Menu")
      }
      
      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('userData', JSON.stringify(user));
      
      console.log("Token:", token);
      console.log("User bilgisi", user);
    }
  };

  


  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require("../../assets/logo.jpeg")} />
      </View>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleLogin}
        validationSchema={validationSchema} >

        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <View style={styles.body_container}>
            <Text style={styles.title}>E-mail</Text>
            <Input
              placeholder="E-mail..."
              value={values.email}
              iconName="email"
              onType={handleChange('email')}
              errorMessage={(touched.email && errors.email) || ''}
            />

            <Text style={styles.title}>Şifre</Text>
            <Input
              placeholder="Şifre..."
              value={values.password}
              iconName="lock-outline"
              onType={handleChange('password')}
              hidePassword
              errorMessage={(touched.password && errors.password) || ''}
            />

            <RedButton title="Giriş Yap" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;