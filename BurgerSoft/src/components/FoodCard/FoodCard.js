import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./FoodCard.style";
import ThreePartButton from "../../components/ThreePartButton";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/orderSlicer';

const FoodCard = ({ food }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0); // Miktarı state olarak ekleyin

  const handleAddToCart = () => {
    if (quantity > 0) { // Miktar 0'dan büyükse sepete ekleyin
      dispatch(addToCart({ id: food.id, name: food.name, price: food.price, quantity }));
    }
  };

  return (
    <View key={food.id} style={styles.container}>
      <Text style={styles.title}>{food.name}</Text>
      <Text style={styles.price}>Fiyat: {food.price} TL</Text>
      <View style={styles.buton_container}>
        <ThreePartButton
          count={quantity} // Miktarı ThreePartButton'a iletilir
          onCountChange={setQuantity} // Miktar değiştiğinde state'i günceller
        />
        <TouchableOpacity onPress={handleAddToCart}>
          <Text>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodCard;
