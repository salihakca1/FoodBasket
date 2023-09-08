import { View, Text ,FlatList, TouchableOpacity, Button} from 'react-native'
import React, { useState, useEffect } from 'react'
import Search from "../../components/Search";
import styles from "./Menu.style";
import FoodCard from "../../components/FoodCard"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import useFetch from "../../hooks/useFetch/UseFetch";
import Config from 'react-native-config';

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";


export default function Foods({navigation}) {

  const [selectedCategory, setSelectedCategory] = useState(1);
  const { error: categoryError, loading: categoryLoading, data: categoryData } = useFetch(Config.CATEGORIES_URL);
  const { error: productError, loading: productLoading, data: productData } = useFetch(Config.PRODUCT_URL);

  const [searchQuery, setSearchQuery] = useState('');

  

  const goToBasket = () => {
    navigation.navigate('Basket'); 
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.category,
        selectedCategory === item.id && styles.selectedCategory, 
      ]}
      onPress={() => setSelectedCategory(item.id)}
    >
      <Text style={styles.category_title}>{item.name}</Text>
    </TouchableOpacity>
  );
  
  const filteredProducts = productData?.data?.filter(
    (product) => product.categoryId === selectedCategory
  ) || [];
  
  const renderFoodCard = ({ item }) => {
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return null; 
    }
    return (
      <TouchableOpacity onPress={() => navigation.navigate('FoodDetail', { food: item })}>
        <FoodCard food={item} />
      </TouchableOpacity>
    );
  };

  const categoryItems = categoryData?.data?.categories || [];

 const handleSearch = (query) => {
    setSearchQuery(query);
  };

  if (categoryLoading || productLoading) {
    return <Loading />;
      }

  if (categoryError || productError) {
      return <Error />;
      }

    

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
      <Search onSearch={handleSearch}/>   
     <TouchableOpacity onPress={goToBasket}>
        <Icon style={styles.icon} name="basket" size={40} color="black" />
      </TouchableOpacity>
      </View>
      <View style={styles.category}>
          <FlatList
          data={categoryItems}
          renderItem={renderCategoryItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          />
           
        <FlatList
        data={filteredProducts}
        renderItem={renderFoodCard}
        keyExtractor={(item) => item.id.toString()}
        />

      </View>
    </View>
  );
};