import { View, Text ,FlatList, TouchableOpacity, Button} from 'react-native'
import React, { useState, useEffect } from 'react'
import Search from "../../components/Search";
import styles from "./Menu.style";
import FoodCard from "../../components/FoodCard"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import useFetch from "../../hooks/useFetch/UseFetch";
import Config from 'react-native-config';

export default function Foods() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);


  const {error, loading, data} = useFetch(Config.PRODUCT_URL);
  console.log("Adressler verileri", data)

  useEffect(() => {
    fetch('http://10.0.2.2:5000/api/categories') //Fetch category
    .then(response => response.json())
    .then(data => {
      if (data.code === 200) {
        setCategories(data.data.categories);
      } else {
        console.error('API returned an error:', data);
      }
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
    });
    fetch('http://10.0.2.2:5000/api/products') // Fetch products
      .then(response => response.json())
      .then(data => {
        if (data.code === 200 && data.data) {
          setProducts(data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
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
  
  const filteredProducts = products.filter(
    (product) => product.categoryId === selectedCategory
  );
  
  const renderFoodCard = ({ item }) => (
    <FoodCard food={item} />
  );

   
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
        data ={categories}
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


