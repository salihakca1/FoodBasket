import { View, Text} from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from "./FoodCard.style";
import ThreePartButton from "../../components/ThreePartButton"


const FoodCard = ({food}) => {

  return (
        <View key={food.id} style={styles.container}>
          <Text style={styles.title}>{food.name}</Text>
          <Text style={styles.price}>Price: {food.price} TL</Text>
          <View style={styles.buton_container}>
          <ThreePartButton />
          </View>     
        </View>
  );
};

export default FoodCard;