import { View, Text ,Image,FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import Search from "../../components/Search";
import styles from "./Menu.style";
import FoodCard from "../../components/FoodCard"

import { useNavigation } from '@react-navigation/native';


const foodData = [
  {
    "id": "0",
    "category": "Yemekler",
    "title":"hello",
    "price":"100"
  },
  {
    "id": "1",
    "category": "İçecekler",
    "title":"AI",
    "price":"100"
  },
  {
    "id": "2",
    "category": "Tatlılar",
    "title":"Hey",
    "price":"100"
  },

  
]


export default function Foods() {

  const navigation = useNavigation();

  const goToBasket = () => {
    navigation.navigate('Basket'); // Navigate to the Basket
  };

  const renderCategoryItem = ({ item }) => (
    <View style={styles.category_title}>
      <Text style={styles.category}>{item.category}</Text>
    </View>
  );

  const renderFoodCard = ({ item }) => (
    <FoodCard food={item} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
      <Search/>
      <TouchableOpacity onPress={goToBasket}>
        <Image style={styles.image} source={require('../../assets/sepet.png')} />
      </TouchableOpacity>
      </View>
      <View style={styles.category}>
        <FlatList
        data ={foodData}
        renderItem={renderCategoryItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        />
         <FlatList
        data={foodData}
        renderItem={renderFoodCard}
        keyExtractor={(item) => item.id.toString()} 
      />
      </View>
    </View>
  );
}


  
