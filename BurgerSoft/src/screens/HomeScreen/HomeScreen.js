
import * as React from 'react';
import { Button, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './HomeScreen.style';

function HomeScreen({ navigation }) {
    const handleLogin = () => {
      navigation.navigate('Login'); 
    };
  
    const handleSignUp = () => {
      navigation.navigate('Register'); 
    };
  
    const handleMenu = () => {
      navigation.navigate('Menu');  
    };
  
    return (
      <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
        <View style={styles.container}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>HOŞGELDİNİZ</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
                  <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={handleSignUp}>
                  <Text style={styles.buttonText}>Kaydol</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        
        <TouchableOpacity style = {styles.menuButton} onPress={handleMenu} >
            <Text style = {styles.buttonText}> MENÜ</Text>
        </TouchableOpacity>

        
      </ImageBackground>
    );
  }
  export default HomeScreen;