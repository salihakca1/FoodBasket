import React from "react";
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './AddressCard.style';

const AddressCard = ({product, onSelect, }) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style = {styles.container} >
                <Text style= {styles.title} >{product.description}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default AddressCard;
