import { View,TextInput, Text} from 'react-native'
import React from 'react'
import styles from "./Input.style"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Input({placeholder, value, onType, iconName, hidePassword, onFocus, errorMessage}) {
  return (
    <View style={styles.container}>
            <View style={styles.inputContainer}>
            <Icon style={styles.icon} name={iconName} size={20} color="gray" />

      <TextInput 
         placeholder={placeholder} 
         onChangeText={onType} 
         value={value}
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

  )
}
