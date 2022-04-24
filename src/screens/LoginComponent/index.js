import React, { useState,useContext } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView , Button, useWindowDimensions,Alert} from 'react-native'
//import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './styles';
// import { firebase } from '../../firebase/config'
import {AuthContext} from '../../context';
import Logo from '../../assets/pictures/blog1.png';
const data=require('../../assets/data.json')
export function LoginComponent({route, navigation}) {
  <Image  source={data.blogs[0].image} style ={[styles.logo, {height:height*0.3}]} resizeMode="contain"/>
    const {height}=useWindowDimensions();
    const onBlog1Pressed = () => {
      var temp = data.blogs[0].content;
      console.warn(temp)
    }

    const onBlog2Pressed = () => {
      var temp = data.blogs[1].id;
      // Alert.alert(
      //   "Alert",
      //   temp
      // );
      console.warn(temp)
    }

    const onBlog3Pressed = () => {
      var temp = data.blogs[2].id;
      // Alert.alert(
      //   "Alert",
      //   temp
      // );
      console.warn(temp)
    }

    const onBlog4Pressed = () => {
      var temp = data.blogs[3].id;
      // Alert.alert(
      //   "Alert",
      //   temp
      // );
      console.warn(temp)
    }

    const onBlog5Pressed = () => {
      var temp = data.blogs[4].id;
      // Alert.alert(
      //   "Alert",
      //   temp
      // );
      console.warn(temp)
    }

    const onBlog6Pressed = () => {
      var temp = data.blogs[5].id;
      // Alert.alert(
      //   "Alert",
      //   temp
      // );
      console.warn(temp)
    }

    const onBlog7Pressed = () => {
      var temp = data.blogs[6].id;
      // Alert.alert(
      //   "Alert",
      //   temp
      // );
      console.warn(temp)
    }

    const onBlog8Pressed = () => {
      var temp = data.blogs[7].id;
      // Alert.alert(
      //   "Alert",
      //   temp
      // );
      console.warn(temp)
    }

    const onBlog9Pressed = () => {
      var temp = data.blogs[8].id;
      Alert.alert(
        "Alert",
        temp
      );
      console.warn(temp)
    }

    const onBlog10Pressed = () => {
      var temp = data.blogs[9].id;
      // Alert.alert(
      //   "Alert",
      //   temp
      // );
      console.warn(temp)
    }
     
    return (
        
    <ScrollView>
    <View style = {styles.root}>
      <Image  source={Logo} style ={[styles.logo, {height:height*0.3}]} resizeMode="contain"/>
     
      <CustomButton 
      text="Blog 1"
      onPress = {onBlog1Pressed}
      type="TERTIARY"
      />

      <CustomButton 
      text="Blog 2"
      onPress = {onBlog2Pressed}
      type="TERTIARY"
      />

      <CustomButton 
      text="Blog 3"
      onPress = {onBlog3Pressed}
      type="TERTIARY"
      />  

      <CustomButton 
      text="Blog 4"
      onPress = {onBlog4Pressed}
      type="TERTIARY"
      />

      <CustomButton 
      text="Blog 5"
      onPress = {onBlog5Pressed}
      type="TERTIARY"
      />

      <CustomButton 
      text="Blog 6"
      onPress = {onBlog6Pressed}
      type="TERTIARY"
      />

      <CustomButton 
      text="Blog 7"
      onPress = {onBlog7Pressed}
      type="TERTIARY"
      />

    <CustomButton 
      text="Blog 8"
      onPress = {onBlog8Pressed}
      type="TERTIARY"
      />

      <CustomButton 
      text="Blog 9"
      onPress = {onBlog9Pressed}
      type="TERTIARY"
      />

      <CustomButton 
      text="Blog 10"
      onPress = {onBlog10Pressed}
      type="TERTIARY"
      /> 
           
    </View>
    </ScrollView>
    );
}