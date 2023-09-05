import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native'; // Eklemeyi unuttuğunuz Text'i ekledim
import styles from './Search.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    onSearch(query); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon
          name="magnify"
          size={24}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Ara.."
          onChangeText={handleSearch}
          value={searchQuery}
        />
      </View>
    </View>
  );
};

export default Search;
