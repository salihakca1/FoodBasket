import { StyleSheet } from "react-native";  
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8E7DC",
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    listItem: {
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC",
    },
    addButton: {
        backgroundColor: "red",
        padding: 5,
        borderRadius: 10,
    },
    addButtonText: {
        color: "white",
        fontSize: 15,
        padding: 2,
    },
    border: {
        flex:0.9,
        borderWidth:2,
        padding:15,
        borderColor:'#FFFFFF',
        backgroundColor:'white',
        borderRadius: 20,
    },
    header: {
        fontSize:35,
        padding:5,
        paddingBottom: 15,
    },
    panel: {
        flex: 0.5,
        padding:10,
        margin:15,
        borderWidth:5,
        backgroundColor:'#E8E7DC',
        borderColor:'#FFFFFF',
        height:300,
        borderRadius:20,
    },
    panelText : {
        padding:5,
        alignSelf:'flex-end',
        backgroundColor:'red',
        color:'white',
        borderRadius:10,
    },
    panelheader : {
        fontSize:20,
    },
    panelheader : {
        fontSize:20,
    }
}); 
  