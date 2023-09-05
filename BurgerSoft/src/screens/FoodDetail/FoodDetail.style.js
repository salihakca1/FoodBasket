import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#E8E7DC",
        flex:1,
    },
    logo_container:{
        justifyContent:"center",
        alignItems:"center"

    },
    title:{
        marginTop:30,
        marginLeft:10,
        marginBottom:10,
        fontSize:20,
        fontWeight:"bold",
    },
    description:{
        fontSize:18,
        marginLeft:10,
    },
    price:{
        marginTop:20,
        marginRight:30,
        textAlign:"right",
        fontSize:15,
        fontWeight:"bold"
    },
    logo:{
       width: 200, 
       height: 100,
    },
})