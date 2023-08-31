import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor:"white",
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        margin: 10
      },
    
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        color:"black"
      },
      price: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
      },
     buton_container:{
      justifyContent:"center",
      alignItems:"flex-end"
     }
});