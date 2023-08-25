import React from "react";

import {  TouchableOpacity, Text } from "react-native";

import styles from './RegisterButton.style';
 
const RegisterButton = ({text, onPress}) => {
    return(
            <TouchableOpacity style= {styles.container} onPress={onPress}  >
                <Text style = {styles.title} >{text}</Text>
            </TouchableOpacity>
    );
};


export default RegisterButton;
