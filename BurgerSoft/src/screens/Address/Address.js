import React from "react";

import { View, FlatList, StyleSheet } from 'react-native';
import AddressCard from "../../components/AddressCard/AddressCard";

import RedButton from '../../components/RedButton/RedButton';
import Config from 'react-native-config';
import useFetch from "../../hooks/useFetch/UseFetch";
import { useSelector } from 'react-redux';

const Address = ({navigation}) => {
  const {error, loading, data} = useFetch(Config.GET_ADDRESS);
  console.log("Adressler verileri", data)

  const user = useSelector(state => state.user.user);
  console.log('user from Redux:', user);
  
  const token = useSelector(state => state.user.token);
  console.log("User token Redux: ",token)


    const datas = [
        { id: "1", title: "Ürün A" },
        { id: "2", title: "Ürün B" },
        { id: "3", title: "Ürün C" },
        { id: "4", title: "Ürün D" },
        { id: "5", title: "Ürün E" },
        { id: "6", title: "Ürün F" },
        { id: "9", title: "Ürün A" },
        { id: "10", title: "Ürün C" },
        { id: "11", title: "Ürün D" },
        { id: "12", title: "Ürün E" },
        { id: "13", title: "Ürün F" },
        // ... diğer ürünler
      ];

    const handleProductSelect = id => {
        console.log("Address selected",id)
        //navigation.navigate('DetailPage', {id});

    };

    function handleLogin(){ //burada da tıkladıgımızda adres ekle sayfasına gidecegiz.
        navigation.navigate('AddAdress');
    }

    const renderProduct = ({item}) => (
        <AddressCard product= {item} onSelect={() => handleProductSelect(item.id)} />
        ) ;

        return (
            <View style = {styles.container}>
              <FlatList data={datas} renderItem={renderProduct} />
              <RedButton  title="Yeni Adres Ekleyin" onPress={handleLogin} />
            </View>
          );
    
};

const styles = StyleSheet.create({
    container: {
        flex:1,
      justifyContent: 'space-evenly',
      padding: 15,
      backgroundColor: '#E8E7DC'
    },
   
  });

export default Address;