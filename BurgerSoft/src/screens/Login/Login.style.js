import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#E8E7DC",
        flex:1,
        padding:20,
        justifyContent:"center"
    },
    logo_container:{
        flex:1,
        justifyContent:"center"
    },
    body_container:{
        flex:1,
        marginTop:1,
        padding:20,
    },
    logo:{
        height:Dimensions.get("window").height/3,
        width:Dimensions.get("window").width,
        resizeMode:"contain",
        alignSelf:"center",
       
    },
    title:{
        color:"black"
    }
    
})