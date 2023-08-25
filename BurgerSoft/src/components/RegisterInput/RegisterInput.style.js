import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 8,
        margin: 3,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    labelContainer: {
        marginBottom: 5,
    },
    labelText: {
        color: 'gray',
        fontSize: 16,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 35,
    },
    errorContainer: {
        marginTop: 5,
    },
    errorText: {
        color: 'red',
        fontSize: 15,
    },
});
