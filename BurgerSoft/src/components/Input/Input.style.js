import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        padding:5,
        margin:10,
        backgroundColor:"white",
        borderRadius:10,
        height:50 
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'gray',
    }, 
     errorContainer: {
        marginTop: 5,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    },
})
