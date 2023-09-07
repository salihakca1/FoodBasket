
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './CartItemCard.style';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/orderSlicer'; 

const CartItemCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > product.quantity) {
      dispatch(addToCart({ productId: product.id, name: product.name, price: product.price, quantity: 1 })); 
    } else if (newQuantity < product.quantity) {
      dispatch(removeFromCart({ productId: product.id, quantity: 1 })); 
    }
  };

  return (
    <View key={product.id} style={styles.productContainer}>
      <Text style={styles.productName}>{product.name}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => handleQuantityChange(product.quantity - 1)}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{product.quantity}</Text>
        <TouchableOpacity onPress={() => handleQuantityChange(product.quantity + 1)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItemCard;
