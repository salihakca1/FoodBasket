import { StyleSheet } from "react-native";
export default StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        width:60,
        backgroundColor: '#E8E7DC',
        borderRadius: 8,
      },
      leftPart: {
        flex: 0.4,
        alignItems: 'center',
      },
      middlePart: {
        flex: 0.6,
        backgroundColor:"red",
        alignItems: 'center',
      },
      rightPart: {
        flex: 0.4,
        alignItems: 'center',
      },
      text: {
        color: 'black',
        fontSize: 15,
      },
      counterText: {
        color: 'black',
        fontSize: 16,
      },
})