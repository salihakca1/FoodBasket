import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles from './PastOrders.style';



const ListItem = ({ item, onPressAdd }) => (
  <View style={styles.listItem}>
    <Text>{item.name}</Text>
    <TouchableOpacity onPress={() => onPressAdd(item)} style={styles.addButton}>
      <Text style={styles.addButtonText}>Tekrar Al</Text>
    </TouchableOpacity>
  </View>
);

const PastOrders = () => {
  const [data, setData] = useState([
    { id: 1, name: "Item 1", description: "Description for Item 1" },
    { id: 2, name: "Item 2", description: "Description for Item 2" },
    { id: 3, name: "Item 3", description: "Description for Item 3" },
    { id: 4, name: "Item 4", description: "Description for Item 4" },
    { id: 5, name: "Item 5", description: "Description for Item 5" },
    { id: 6, name: "Item 6", description: "Description for Item 6" },
    { id: 7, name: "Item 7", description: "Description for Item 7" },
    { id: 8, name: "Item 8", description: "Description for Item 8" },
    { id: 9, name: "Item 9", description: "Description for Item 9" },
    { id: 10, name: "Item 10", description: "Description for Item 10"},
    { id: 11, name: "Item 11", description: "Description for Item 11"},
    { id: 12, name: "Item 12", description: "Description for Item 12"},
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const handlePressAdd = (item) => {
    console.log("Add button pressed for item:", item);
    setSelectedItem(item);
  };

  const handleClosePanel = () => {
    setSelectedItem(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Geçmiş Siparişlerim</Text>
      <View style={styles.border}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ListItem item={item} onPressAdd={handlePressAdd} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      {selectedItem && (
        <View style={styles.panel}>
          <TouchableOpacity onPress={handleClosePanel} style={styles.closeButton}>
            <Text style={styles.panelText}>Kapat</Text>
          </TouchableOpacity>
          <Text >Ürün Adı: {selectedItem.name}</Text>
          <Text style={styles.panelDescription}>Açıklama: {selectedItem.description}</Text>
        </View>
      )}
    </View>
  );
};

export default PastOrders;
