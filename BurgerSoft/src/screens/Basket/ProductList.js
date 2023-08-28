import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const ProductList = () => {
  const [productNames, setProductNames] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://10.0.2.2:5000/api/products')
      .then(response => response.json())
      .then(data => {
        // Extract product names
        const names = data.data.map(product => product.name);
        setProductNames(names);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View>
      <Text>Product Names:</Text>
      {productNames.map((name, index) => (
        <Text key={index}>{name}</Text>
      ))}
    </View>
  );
};

export default ProductList;
