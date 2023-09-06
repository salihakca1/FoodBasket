import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch/UseFetch';

import CartItemCard from '../../components/CartItemCard/CartItemCard';

import styles from './Basket.style';

import {Picker} from '@react-native-picker/picker';

const MyBasketPage = ({navigation}) => {
  const {
    error: error,
    loading: loading,
    data: data,
  } = useFetch(Config.PRODUCT_URL);
  console.log('Ürün verileri', data);
  const {
    error: AddressError,
    loading: AddressLoading,
    data: dataAddress,
  } = useFetch(Config.GET_ADDRESS);

  console.log('Address verileri', dataAddress);
  console.log('Address verileriiiii', dataAddress.data);

  // Buradaki veriler backendden gelecek
  const [products, setProducts] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('adres seçiniz');

  const handleQuantityChange = (productId, newQuantity) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId
          ? {...product, quantity: Math.max(newQuantity, 1)}
          : product,
      ),
    );
  };

  // burada sepet bilgileri backende iletilecek
  const handleCompleteOrder = () => {
    // siparişi tamamla
  };

  const renderProduct = ({item}) => (
    <CartItemCard
      product={item}
      onSelect={() => handleProductSelect(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍️ Sepetim</Text>

      <Text style={styles.sectionTitle}>Seçili Ürünlerim</Text>

      <FlatList data={data?.data} renderItem={renderProduct} />

      <Text style={styles.sectionTitle}>Teslimat Adresi</Text>
{/* 
      <Picker
        selectedValue={selectedAddress}
        onValueChange={(itemValue, itemIndex) => setSelectedAddress(itemValue)}>
        {dataAddress.data.map((item, index) => (
          <Picker.Item key={index} label={item.address} value={item.address} />
        ))}
        </Picker>*/}
        

      <TouchableOpacity
        style={styles.completeOrderButton}
        onPress={handleCompleteOrder}>
        <Text style={styles.buttonText}>Siparişi Tamamla</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyBasketPage;
