import * as React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import {createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AddAdress from './screens/AddAdress/AddAdress';
import OrderScreen from './screens/Order/Order';
import PastOrders from './screens/PastOrders/PastOrders';
import AddressScreen from './screens/Address/Address';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Content from './components/MyDrawer/MyDrawer'

import RegisterScreen from './screens/Register/Register';
import LoginScreen from './screens/Login/Login';
import MenuScreen from "./screens/Menu/Menu";
import BasketScreen from './screens/Basket/Basket';
import HomeScreen from './screens/HomeScreen/HomeScreen';

import FoodDetail from './screens/FoodDetail/FoodDetail';

import { useDispatch, useSelector } from 'react-redux'; // useSelector'ı içe aktarıyoruz


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const ProfileDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Content {...props} />}>
      <Drawer.Screen name="App" component={MenuScreen} />
      <Drawer.Screen name="Order" component={PastOrders} />
      <Drawer.Screen name="Address" component={AddressScreen} />
      <Drawer.Screen name="Log out " component={HomeScreen} />
    </Drawer.Navigator>
  )
}


export default function Router() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={ProfileDrawer} />
        <Stack.Screen name="FoodDetail" component={FoodDetail}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AddAdress" component={AddAdress} />
        <Stack.Screen name="Basket" component={BasketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



