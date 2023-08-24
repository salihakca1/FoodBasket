import React from "react";
import {View,Text, Image, Alert} from "react-native";
import styles from "./Login.style";
import RedButton from "../../components/RedButton";
import Input from "../../components/Input"
import {Formik} from "formik";

const Login = () => {
   function handleLogin(values){
      console.log(values)
   }
    return(
        <View style={styles.container}>
           <View style={styles.logo_container}>
            <Image style={styles.logo} source={require("../../assets/logo.jpeg")}/>
           </View>
           <Formik initialValues={{email:'',password:''}} onSubmit={handleLogin}>
            {({handleSubmit,handleChange,values})=> (
           <View style={styles.body_container}>
             <Text style={styles.title}>E-mail</Text>
             <Input 
                placeholder="E-mail..." 
                value={values.email }
                onType={handleChange('email')}/>
             <Text style={styles.title}>Şifre</Text>
             <Input 
                placeholder="Şifre..." 
                value={values.password}
                onType={handleChange('password')}
                secure={true}/>
             <RedButton title="Giriş Yap" onPress={handleSubmit}/>
           </View>
            )}
           </Formik>
        </View>

    );
};

export default Login;