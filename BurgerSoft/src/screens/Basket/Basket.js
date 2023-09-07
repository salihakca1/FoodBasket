import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/UseFetch';
import CartItemCard from '../../components/CartItemCard/CartItemCard';
import styles from './Basket.style';
import { Picker } from '@react-native-picker/picker';
import { useSelector } from 'react-redux';
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import usePost from '../../hooks/usePost/UsePost';
import { useDispatch } from 'react-redux';

const MyBasketPage = ({ navigation }) => {
  const order = useSelector(state => state.order.orders);
  const { error: addressError, loading: addressLoading, data: addressData } = useFetch(Config.GET_ADDRESS);
  const dispatch = useDispatch();

  const { data: orderData, loading: orderLoading, error: orderError, post } = usePost();

  

  const addresses = addressData?.data || []; 

  console.log(addresses)
  const handleCompleteOrder = () => {
    //post(Config.ADD_ORDER, addresses.id);
  };

  const [products, setProducts] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(addresses.length > 0 ? addresses[0].description : 'adres seçiniz');

  const handleQuantityChange = (productId, newQuantity) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId
          ? { ...product, quantity: Math.max(newQuantity, 1) }
          : product,
      ),
    );
  };

  const renderProduct = ({ item }) => (
    <CartItemCard
      product={item}
      onSelect={() => handleProductSelect(item.id)}
      onQuantityChange={handleQuantityChange}
    />
  );

    

  if (orderLoading || addressLoading) {
    return <Loading />;
      }

  if (orderError || addressError) {
      return <Error />;
      }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍️ Sepetim</Text>

      <Text style={styles.sectionTitle}>Seçili Ürünlerim</Text>

      <FlatList data={order} renderItem={renderProduct} />

      <Text style={styles.sectionTitle}>Teslimat Adresi</Text>

      <Picker
        selectedValue={selectedAddress}
        onValueChange={(itemValue, itemIndex) => setSelectedAddress(itemValue)}
      >
        {addresses.map((item, index) => (
          <Picker.Item
            key={index}
            label={item.description}
            value={item.description}
          />
        ))}
      </Picker>

      <TouchableOpacity
        style={styles.completeOrderButton}
        onPress={handleCompleteOrder}
      >
        <Text style={styles.buttonText}>Siparişi Tamamla</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyBasketPage;
