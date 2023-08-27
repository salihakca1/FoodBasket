import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Login.style";
import RedButton from "../../components/RedButton";
import Input from "../../components/Input";
import { Formik } from "formik";

import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('Geçerli bir e-posta girin').required('E-posta alanı zorunludur'),
  password: yup.string().required('Şifre alanı zorunludur'),
});

const Login = () => {
  function handleLogin(values) {
    console.log(values);
  }

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