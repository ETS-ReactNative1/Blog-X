import React, { useState,useContext } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView , Button, useWindowDimensions} from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './styles';
import { firebase } from '../../firebase/config'
import {AuthContext} from '../../context';
import Logo from '../../assets/photos/logo.png';

export function RegisterComponent({route, navigation}) {
    const {state, dispatch} = useContext(AuthContext);

   const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
  
    const {height}=useWindowDimensions();
    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //       //console.log(user); // It shows the Firebase user
    //       //console.log(firebase.auth().user); // It is still undefined
    //       user.getIdToken().then(function(idToken) {  // <------ Check this line
    //          console.log(idToken); // It shows the Firebase token now
    //       });
    //   }
  // });
  
    const onRegisterPressed = () => {
      firebase
           .auth()
           .createUserWithEmailAndPassword(username, password)
           .then(userCredentials => {
             const user = userCredentials.user;
             console.warn('Registered with:', username);
           })
           .catch(error => alert(error.message))
     
       }
       const OnLoginPressed = () => {
        navigation.goBack()
       }
       //import { LoginComponent } from '../LoginComponent';
     
    return (
        
    <ScrollView>
    <View style = {styles.root}>
      <Image  source={Logo} style ={[styles.logo, {height:height*0.3}]} resizeMode="contain"/>
      <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}

      secureTextEntry="False"/>
      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword}
      secureTextEntry="True"/>
      <CustomButton 
      text="Register now"
      onPress = {onRegisterPressed}
      type="PRIMARY"
      bgColor="#e3e3e3"
      fgColor="#363636"
      />
      <CustomButton 
      text="Already have an acount? Login"
      onPress = {OnLoginPressed}
      type="PRIMARY"
      bgColor="#e3e3e3"
      fgColor="#363636"
      />
    </View>
    </ScrollView>
    );
}