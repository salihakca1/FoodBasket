import { View, Text} from 'react-native'
import React from 'react'
import styles from "./FoodCard.style";
import ThreePartButton from "../../components/ThreePartButton"

const foodData = [
  {
    "id": "0",
    "category": "Yemekler",
    "title":"hello",
    "price":"100"
  },
  {
    "id": "1",
    "category": "İçecekler",
    "title":"AI",
    "price":"100"
  },
  {
    "id": "2",
    "category": "Tatlılar",
    "title":"Hey",
    "price":"100"
  },

  
]

const FoodCard = ({food}) => {
  return (
        <View key={food.id} style={styles.container}>
          <Text style={styles.title}>{food.title}</Text>
          <Text style={styles.price}>Price: ${food.price}</Text>
          <View style={styles.buton_container}>
          <ThreePartButton />
          </View>     
        </View>
  );
};

export default FoodCard;