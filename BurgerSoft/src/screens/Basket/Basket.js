import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
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
import { resetOrder } from '../../redux/orderSlicer'; 

const MyBasketPage = ({ navigation }) => {
  const order = useSelector(state => state.order.orders);
  const dispatch = useDispatch();
  const { error: addressError, loading: addressLoading, data: addressData } = useFetch(Config.GET_ADDRESS);
  const { data: orderData, loading: orderLoading, error: orderError, post } = usePost();

  const [addresses, setAddresses] = useState([]);
  const [selectedAddressData, setSelectedAddressData] = useState(null);

  useEffect(() => {
    if (addressData?.data) {
      setAddresses(addressData.data);
      setSelectedAddressData(addressData.data.length > 0 ? addressData.data[0] : null);
    }
  }, [addressData]);

  const handleCompleteOrder = () => {
    if (selectedAddressData) {
      post(Config.ADD_ORDER, { addressId: selectedAddressData.id });
        Alert.alert('Sipariş Tamamlandı', 'Siparişiniz başarıyla verildi.', [
          {
            text: 'Anladım',
            onPress: () => {
              navigation.navigate('Menu');
              dispatch(resetOrder()); 
            },
          },
        ]);
    }
  };

  const [products, setProducts] = useState([]);

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
        selectedValue={selectedAddressData ? selectedAddressData.description : 'adres seçiniz'}
        onValueChange={(itemValue, itemIndex) => {
          const selectedAddress = addresses.find(address => address.description === itemValue);
          setSelectedAddressData(selectedAddress);
        }}
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