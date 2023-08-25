import React from "react";
import LottieView from "lottie-react-native";

import { View, StyleSheet } from 'react-native';

function Error() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/error.json')}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200, 
    height: 200,
  },
});

export default Error;
