import { View, Text ,Image,FlatList} from 'react-native'
import React from 'react'
import Search from "../../components/Search";
import styles from "./Foods.style";
import FoodCard from "../../components/FoodCard"


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
      <Image style={styles.image} source={require('../../assets/sepet.png')}/>
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


  
