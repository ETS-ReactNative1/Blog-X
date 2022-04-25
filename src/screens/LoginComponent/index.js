import React, { useState,useContext } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView , Button, useWindowDimensions,Alert} from 'react-native'
//import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './styles';
// import { firebase } from '../../firebase/config'
import {AuthContext} from '../../context';
import Logo from '../../assets/pictures/logo1.png';
import { BlogComponent } from '../BlogComponent';
const data=require('../../assets/data.json')
export function LoginComponent({route, navigation}) {
  <Image  source={Logo} style ={[styles.logo, {height:height*0.3}]} resizeMode="contain"/>
    const {height}=useWindowDimensions();
    const onBlog1Pressed = () => {
      navigation.navigate('BlogComponent',{
        image_source:data.blogs[0].image,
        image_caption:data.blogs[0].image_caption,
        blog_title:data.blogs[0].title,
        blog_content:data.blogs[0].content,
        author:data.blogs[0].author,
        date:data.blogs[0].date,
      })
    }
    const onBlog2Pressed = () => {
      navigation.navigate('BlogComponent',{
        image_source:data.blogs[1].image,
        image_caption:data.blogs[1].image_caption,
        blog_title:data.blogs[1].title,
        blog_content:data.blogs[1].content,
        author:data.blogs[1].author,
        date:data.blogs[1].date,
      })
    }
    const onBlog3Pressed = () => {
      navigation.navigate('BlogComponent',{
        image_source:data.blogs[2].image,
        image_caption:data.blogs[2].image_caption,
        blog_title:data.blogs[2].title,
        blog_content:data.blogs[2].content,
        author:data.blogs[2].author,
        date:data.blogs[2].date,
      })
    }
    const onBlog4Pressed = () => {
      navigation.navigate('BlogComponent',{
        image_source:data.blogs[3].image,
        image_caption:data.blogs[3].image_caption,
        blog_title:data.blogs[3].title,
        blog_content:data.blogs[3].content,
        author:data.blogs[3].author,
        date:data.blogs[3].date,
      })
    }
    const onBlog5Pressed = () => {
      navigation.navigate('BlogComponent',{
        image_source:data.blogs[4].image,
        image_caption:data.blogs[4].image_caption,
        blog_title:data.blogs[4].title,
        blog_content:data.blogs[4].content,
        author:data.blogs[4].author,
        date:data.blogs[4].date,
      })
    }
    const onBlog6Pressed = () => {
      navigation.navigate('BlogComponent',{
        image_source:data.blogs[5].image,
        image_caption:data.blogs[5].image_caption,
        blog_title:data.blogs[5].title,
        blog_content:data.blogs[5].content,
        author:data.blogs[5].author,
        date:data.blogs[5].date,
      })
    }
    const onBlog7Pressed = () => {
      navigation.navigate('BlogComponent',{
        image_source:data.blogs[6].image,
        image_caption:data.blogs[6].image_caption,
        blog_title:data.blogs[6].title,
        blog_content:data.blogs[6].content,
        author:data.blogs[6].author,
        date:data.blogs[6].date,
      })
    }
    const onBlog8Pressed = () => {
      navigation.navigate('BlogComponent',{
        image_source:data.blogs[7].image,
        image_caption:data.blogs[7].image_caption,
        blog_title:data.blogs[7].title,
        blog_content:data.blogs[7].content,
        author:data.blogs[7].author,
        date:data.blogs[7].date,
      })
    }
    const onBlog9Pressed = () => {
      navigation.navigate('BlogComponent',{
        image_source:data.blogs[8].image,
        image_caption:data.blogs[8].image_caption,
        blog_title:data.blogs[8].title,
        blog_content:data.blogs[8].content,
        author:data.blogs[8].author,
        date:data.blogs[8].date,
      })
    }
    const onBlog10Pressed = () => {
      navigation.navigate('BlogComponent',{
        image_source:data.blogs[9].image,
        image_caption:data.blogs[9].image_caption,
        blog_title:data.blogs[9].title,
        blog_content:data.blogs[9].content,
        author:data.blogs[9].author,
        date:data.blogs[9].date,
      })
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