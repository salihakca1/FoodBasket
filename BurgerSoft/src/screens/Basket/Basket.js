import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import Config from 'react-native-config';

import useFetch from "../../hooks/useFetch/UseFetch";
import AddressCard from "../../components/AddressCard/AddressCard";

import CartItemCard from "../../components/CartItemCard/CartItemCard";



import styles from './Basket.style';

const MyBasketPage = ({navigation}) => {
  
  const {error, loading, data} = useFetch(Config.PRODUCT_URL);
  console.log("Ürün verileri", data)

  // Buradaki veriler backendden gelecek
  const [products, setProducts] = useState([

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


  const renderProduct = ({item}) => (
    <CartItemCard product= {item} onSelect={() => handleProductSelect(item.id)} />
   );


  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍️ Sepetim</Text>

      <Text style={styles.sectionTitle}>Seçili Ürünlerim</Text>

      <FlatList data={data?.data} renderItem={renderProduct} />



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

export default MyBasketPage;