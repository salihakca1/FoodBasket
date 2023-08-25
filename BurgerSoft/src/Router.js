import * as React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import {createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AddAdress from './screens/AddAdress/AddAdress';
import OrderScreen from './screens/Order/Order'
import AddressScreen from './screens/Address/Address';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Content from './components/MyDrawer/MyDrawer'

import RegisterScreen from './screens/Register/Register';


function HomeScreen({ navigation }) {


  const handleLogin = () => {
    // Logic for handling login button click
  };

  const handleSignUp = () => {
    // Logic for handling sign up button click
  };

  return (

    <ImageBackground source={require('./background.jpg')} style={styles.background}>
      <View style={styles.container}>


    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text style={styles.title}>HOŞGELDİNİZ</Text>
      <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Kaydol</Text>
            </TouchableOpacity>
          </View>
          
        </View>

      
    </View>
    </View>
    <Button style = {styles.buttonmenu}
          onPress={() => navigation.navigate('Menu')}
          title="Go to Menu"
          />

    </ImageBackground>

  );
}

function MenuScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const ProfileDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Content {...props} />}>
      <Drawer.Screen name="App" component={MenuScreen} />
      <Drawer.Screen name="Order" component={OrderScreen} />
      <Drawer.Screen name="Address" component={AddAdress} />
      <Drawer.Screen name="Log out " component={HomeScreen} />
    </Drawer.Navigator>
  )
}


export default function Router() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={ProfileDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}









const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 200,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 8,
    width: 100,
  },
  loginButton: {
    backgroundColor: 'blue',
    marginRight: 10,
    width: 100,
  },
  signUpButton: {
    backgroundColor: 'orange',
    marginLeft: 10,
    width: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonmenu: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 200,
  },
});
