import React from "react";
import { TextInput, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './RegisterInput.style';

const RegisterInput = ({ placeholder, value, onType, iconName, hidePassword, labelText, onFocus, errorMessage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{labelText}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Icon style={styles.icon} name={iconName} size={20} color="gray" />
        <TextInput
          onChangeText={onType}
          value={value}
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={hidePassword}
          onFocus={onFocus}
        />
      </View>
      {errorMessage && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};

export default RegisterInput;