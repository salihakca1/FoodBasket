import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 200,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'column'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 8,
    width: 100,
    marginTop: 15,
  },
  loginButton: {
    backgroundColor: 'blue',
    marginRight: 10,
  },
  signUpButton: {
    backgroundColor: 'orange',
    marginLeft: 10,
    width: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuButton: {
    backgroundColor: 'red',
    width: '60%', 
    marginTop: 15,
    marginBottom: 15,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center', 
    alignSelf: 'center', 
    borderRadius: 20
  },
});
