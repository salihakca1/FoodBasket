import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Config from 'react-native-config';
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import useFetch from "../../hooks/useFetch/UseFetch";

import styles from './PastOrders.style';
import usePost from '../../hooks/usePost/UsePost';

const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

const ListItem = ({ item, onPressAdd }) => (
  <View style={styles.listItem}>
    <Text>{item.description}</Text>
    <Text>{item.orderInfo.address.description}</Text>
    <Text>{formatDateTime(item.orderInfo.createdAt)}</Text>
    <TouchableOpacity onPress={() => onPressAdd(item)} style={styles.addButton}>
      <Text style={styles.addButtonText}>Tekrar Al</Text>
    </TouchableOpacity>
  </View>
);

const PastOrders = () => {
  const {error, loading, data: PastOrderData} = useFetch(Config.PAST_ORDERS);
  const [selectedItem, setSelectedItem] = useState(null);
  const { data: reOrderData, loading: reOrderLoading, error: reOrderError, post } = usePost();
  const [selectedItemText, setSelectedItemText] = useState(null);

  const handlePressAdd = (item) => {
    console.log("itemcı", item);
    post(`${Config.REORDER_POST}/${item.orderInfo.id}`, { addressId: item.orderInfo.address.id });
    console.log("Reorder", item.orderInfo.id);
    setSelectedItem(item);
    setSelectedItemText("SİPARİŞ TEKRARDAN VERİLDİ");
  };

  const handleClosePanel = () => {
    setSelectedItem(null);
  };

  return (
    <View style={styles.container}>
    <Text style={styles.header}>Geçmiş Siparişlerim</Text>
    <View style={styles.border}>
      <FlatList
        data={PastOrderData.data}
        renderItem={({ item }) => <ListItem item={item} onPressAdd={handlePressAdd} />}
        keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
      />
    </View>
    {selectedItem && (
      <View style={styles.panel}>
        <TouchableOpacity onPress={handleClosePanel}>
          <Text style={styles.panelText}>Kapat</Text>
        </TouchableOpacity>
        {selectedItemText && <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{selectedItemText}</Text>}
      </View>
    )}
  </View>
  );
};

export default PastOrders;