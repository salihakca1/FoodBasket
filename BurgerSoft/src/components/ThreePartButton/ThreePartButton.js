import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./ThreePartButton.style";

const ThreePartButton = ({ count, onCountChange }) => {
  const incrementCount = () => {
    onCountChange(count + 1); // Miktarı artır
  };

  const decrementCount = () => {
    if (count > 0) {
      onCountChange(count - 1); // Miktarı azalt (0'dan küçük olmamalı)
    }
  };

  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View style={styles.leftPart}>
        <TouchableOpacity onPress={decrementCount}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.middlePart}>
        <Text style={styles.counterText}>{count}</Text>
      </View>
      <View style={styles.rightPart}>
        <TouchableOpacity onPress={incrementCount}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ThreePartButton;