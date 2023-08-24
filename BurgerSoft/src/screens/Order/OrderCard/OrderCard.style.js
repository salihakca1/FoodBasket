import { StyleSheet,Dimensions } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        margin: 10,
        borderRadius: 10,
        width: Dimensions.get('window').width /2.3,
        flex:1
      },
      image: {
        height: Dimensions.get('window').height / 4,
        alignItems:'center',
        margin:5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
          
      },
      title: {
        
        fontSize: 18,
      },
      inner_title:{
        fontSize:15,
        fontWeight:'900'

      },
      inStock:{
        color: "red"
      }
})