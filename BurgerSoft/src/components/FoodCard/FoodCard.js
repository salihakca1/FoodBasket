import { View, Text} from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from "./FoodCard.style";
import ThreePartButton from "../../components/ThreePartButton"


const FoodCard = ({food}) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://10.0.2.2:5000/api/products')
    .then(response => response.json())
    .then(data => {
      if (data.code === 200 && data.data) {
        // Ürünleri state'e kaydet
        setProduct(data.data);
      }
    });
}, []);

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