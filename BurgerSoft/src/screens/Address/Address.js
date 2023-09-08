import React from "react";

import { View, FlatList, StyleSheet } from 'react-native';
import AddressCard from "../../components/AddressCard/AddressCard";

import RedButton from '../../components/RedButton/RedButton';
import Config from 'react-native-config';
import useFetch from "../../hooks/useFetch/UseFetch";
import { useSelector } from 'react-redux';

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Address = ({navigation}) => {
  const {error, loading, data} = useFetch(Config.GET_ADDRESS);

    const order = useSelector(state => state.order.orders);
  console.log("order", order)
  /*
  const user = useSelector(state => state.user.user);
  console.log('user from Redux:', user);
  
  const token = useSelector(state => state.user.token);
  console.log("User token Redux: ",token)
*/


    const handleProductSelect = id => {
        console.log("Address selected",id)

    };

    function handleLogin(){
        navigation.navigate('AddAdress');
    }

    const renderProduct = ({item}) => (
        <AddressCard product= {item} onSelect={() => handleProductSelect(item.id)} />
        ) ;

        if(loading){
          return <Loading />;
      }
  
      if(error){  
          return <Error />;
      }
        return (
            <View style = {styles.container}>
              <FlatList data={data?.data} renderItem={renderProduct} />
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