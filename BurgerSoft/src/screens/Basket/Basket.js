import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import ProductList from './ProductList'; 


import styles from './Basket.style';

export default function MyBasketPage() {

  

  // Buradaki veriler backendden gelecek
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', quantity: 1 },
    { id: 2, name: 'Product 2', quantity: 1 },
    { id: 3, name: 'Product 3', quantity: 1 },
  ]);

  const handleQuantityChange = (productId, newQuantity) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId
          ? { ...product, quantity: Math.max(newQuantity, 1) } 
          : product
      )
    );
  };

  // burada sepet bilgileri backende iletilecek
  const handleCompleteOrder = () => {
    // siparişi tamamla
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍️ Sepetim</Text>

      <Text style={styles.sectionTitle}>Seçili Ürünlerim</Text>
      {products.map(product => (
        <View key={product.id} style={styles.productContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => handleQuantityChange(product.id, product.quantity - 1)}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{product.quantity}</Text>
            <TouchableOpacity onPress={() => handleQuantityChange(product.id, product.quantity + 1)}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>

          

        </View>
        
      ))}

        <View>
          <ProductList />
        </View>

      <Text style={styles.sectionTitle}>Teslimat Adresi</Text>

      <TouchableOpacity
        style={styles.completeOrderButton}
        onPress={handleCompleteOrder}
      >
        <Text style={styles.buttonText}>Siparişi Tamamla</Text>
      </TouchableOpacity>
    </View>
  );
}
