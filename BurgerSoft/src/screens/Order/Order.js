import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from './Order.style';

export default function Order({navigation}) {

  const handlePress=()=>
  {
      navigation.navigate('PastOrders')
  }

  return (
    <View>
      <Text>Order</Text>
      <Button
      title='Buton'
      onPress={handlePress}
      ></Button>
    </View>
  )
}