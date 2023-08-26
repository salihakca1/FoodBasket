import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor:"#E8E7DC",
        flex: 1,
        justifyContent: 'center',
        padding: 5,
      },
      formContainer: {
        marginHorizontal: 20, 
      },
    
    title:{
        color:"black",
        
    },
    headerTitle: {
        color: "red", 
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center', 
   
      },
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      checkboxLabel: {
        marginLeft: 5,
        fontSize: 13
      },

})
