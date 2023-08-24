import * as React from 'react';
import { Button, View } from 'react-native';
import {createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import OrderScreen from './screens/Order/Order'
import AddressScreen from './screens/Address/Address';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Content from './components/MyDrawer/MyDrawer'


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Button
        onPress={() => navigation.navigate('Menu')}
        title="Go to Menu"
      />
    </View>
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
      <Drawer.Screen name="Address" component={AddressScreen} />
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

