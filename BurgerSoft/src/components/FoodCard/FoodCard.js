import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./FoodCard.style";
import ThreePartButton from "../../components/ThreePartButton";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/orderSlicer';
import usePost from '../../hooks/usePost/UsePost';
import Config from 'react-native-config'; 
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
const FoodCard = ({ food }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0); 
  const { data, loading, error, post } = usePost();

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(addToCart({ productId: food.id, name: food.name, price: food.price, quantity })); 
       post(Config.ADD_CART_ORDER, {product: {id: food.id}});
     // console.log("Food id", food.id)
    }
  };

  if(loading){
    return <Loading />;
}

if(error){  
    return <Error />;
}
  return (
    <View key={food.id} style={styles.container}>
      <Text style={styles.title}>{food.name}</Text>
      <Text style={styles.price}>Fiyat: {food.price} TL</Text>
      <View style={styles.buton_container}>
        <ThreePartButton
          count={quantity} 
          onCountChange={setQuantity} 
        />
        <TouchableOpacity onPress={handleAddToCart}>
          <Text>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodCard;
