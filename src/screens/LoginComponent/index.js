import React, { useState,useContext } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView , Button, useWindowDimensions,Alert} from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './styles';
import { firebase } from '../../firebase/config'
import {AuthContext} from '../../context';
import Logo from '../../assets/photos/logo.png';

export function LoginComponent({route, navigation}) {
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
    const onSignInPressed = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then((response) => {
                const uid = response.user.uid
                //console.warn(uid)
                navigation.navigate('Home')
            })
            .then(async data => {
              //console.warn("cc")
              const jwtToken = await firebase.auth().currentUser.getIdToken(true).then(function(jwtToken) {
                console.log(jwtToken)
                // console.warn(jwtToken)
                // Send token to your backend via HTTPS
                // ...
              }).catch(function(error) {
                // Handle error
              });
              
              //console.warn("dd")
            })
            .catch(error => {
                alert(error)
            })
    }
    
       const onSignInGooglePressed = () => {
         console.warn("Sign in Google");
       }
       const onSignInApplePressed = () => {
         console.warn("Sign in Apple");
       }
      //  const onSignUpPressed = () => {
      //    console.warn("Sign Up");
      //  }
       const onSignInGithubPressed = () => {
         console.warn("Sign in Github");
       }
       const onForgotPassword = () => {
        navigation.navigate('ForgotPasswordComponent')
        
       }
       const onSignUpPressed = () => {
        navigation.navigate('RegisterComponent')
      }
     
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
      text="Sign In"
      onPress = {onSignInPressed}
      type="PRIMARY"
      />
      <CustomButton 
      text="Forgot Password?"
      onPress = {onForgotPassword}
      type = "TERTIARY"
      />
      <CustomButton 
      text="Sign In with Google"
      onPress = {onSignInGooglePressed}
      type="PRIMARY"
      bgColor="#FAE9EA"
      fgColor="#DD4D44"
      />
      <CustomButton 
      text="Sign In with Apple"
      onPress = {onSignInApplePressed}
      type="PRIMARY"
      bgColor="#e3e3e3"
      fgColor="#363636"
      />
      <CustomButton 
      text="Sign In with Github"
      onPress = {onSignInGithubPressed}
      type="PRIMARY"
      bgColor="#e3e3e3"
      fgColor="#363636"
      />
      <CustomButton 
      text="Don't have an account? Create one"
      onPress = {onSignUpPressed}
      type="TERTIARY"
      />
    </View>
    </ScrollView>
    );
}