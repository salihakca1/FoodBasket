import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './CartItemCard.style';

const CartItemCard = ({product, onSelect}) => {
  return (
    <View key={product.id} style={styles.productContainer}>
      <Text style={styles.productName}>{product.name}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() =>
            handleQuantityChange(product.id, product.quantity - 1)
          }>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{product.quantity}</Text>
        <TouchableOpacity
          onPress={() =>
            handleQuantityChange(product.id, product.quantity + 1)
          }>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItemCard;
