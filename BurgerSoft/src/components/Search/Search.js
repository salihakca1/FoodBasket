import React from 'react';
import { TextInput, View } from 'react-native';
import styles from "./Search.style"

const Search = () => {
    return(
        <View style={styles.container}>
            <TextInput style={styles.textinput}
            placeholder='Ara..' onChangeText={null}
            />
        </View>
    )
}

export default Search;