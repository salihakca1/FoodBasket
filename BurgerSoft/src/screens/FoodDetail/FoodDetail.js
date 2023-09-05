import React from 'react';
import { View, Text,Image } from 'react-native';
import styles from "./FoodDetail.style"

const FoodDetail = ({ route }) => {
  const { food } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
       <Image style={styles.logo} source={require("../../assets/logo.jpeg")} />
      </View>
      <Text style={styles.title}>{food.name}</Text>
      <Text style={styles.description}>{food.description}</Text>
      <Text style={styles.price}>Fiyat: {food.price} TL</Text>
    </View>
  );
};

export default FoodDetail;