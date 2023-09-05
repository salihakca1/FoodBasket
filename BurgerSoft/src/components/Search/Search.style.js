import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 2,
    marginTop: 20,
    marginLeft: 5,
    borderRadius: 5,
    justifyContent: 'flex-start',
    textAlign: 'center',
    height: 40,
    width: 340,
  },    
  inputContainer: {
    flexDirection: 'row', // Bu satırı ekledik, icon ve TextInput'i yan yana yerleştirmek için
    alignItems: 'center', // Bu satırı ekledik, öğeleri dikey olarak hizalamak için
  },
  textinput: {
    borderRadius: 10,
    marginLeft: 5, // İstediğiniz boşluğu ayarlamak için
  },
});