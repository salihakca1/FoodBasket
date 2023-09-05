import { View, Text ,FlatList, TouchableOpacity, Button} from 'react-native'
import React, { useState, useEffect } from 'react'
import Search from "../../components/Search";
import styles from "./Menu.style";
import FoodCard from "../../components/FoodCard"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import useFetch from "../../hooks/useFetch/UseFetch";
import Config from 'react-native-config';

import Loading from "../../assets/loading.json.json";
import Error from "../../assets/error.json";

export default function Foods() {

  const [selectedCategory, setSelectedCategory] = useState(1);
  const { error: categoryError, loading: categoryLoading, data: categoryData } = useFetch(Config.CATEGORIES_URL);
  const { error: productError, loading: productLoading, data: productData } = useFetch(Config.PRODUCT_URL);

 
  const navigation = useNavigation();

  const goToBasket = () => {
    navigation.navigate('Basket'); // Navigate to the Basket
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
  
  const renderFoodCard = ({ item }) => (
    <FoodCard food={item} />
  );

  const categoryItems = categoryData?.data?.categories || [];

 
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
      <Search/>
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