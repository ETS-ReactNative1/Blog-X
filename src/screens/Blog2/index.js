import React, { useState,useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView , Button, useWindowDimensions,Alert} from 'react-native'
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './styles';
import picture from "../../assets/pictures/blog2.jpg";
import {AuthContext} from '../../context';
const data=require('../../assets/data.json')

export function Blog2({route, navigation}) {
 
    const {height}=useWindowDimensions();
  
    // id:data.blogs[0].id,
    //     image_source:data.blogs[0].image,
    //     image_caption:data.blogs[0].image_caption,
    //     blog_title:data.blogs[0].title,
    //     blog_content:data.blogs[0].content,
    //     author:data.blogs[0].author,
    //     date:data.blogs[0].date,

    const onGoBack = () => {
      navigation.goBack()
    }

    return (    
    <ScrollView style = {styles.scroll}>
      {/* <Image  source={route.params.image_source} style ={[styles.logo, {height:height*0.3}]} resizeMode="contain"/> */}
    <View style = {styles.root}>
    <Image  source={picture} style ={[styles.logo, {height:height*0.3}]} resizeMode="contain"/>
      <Text style={styles.image_caption}>{data.blogs[0].image_caption}</Text>
      <TouchableOpacity
            style={styles.backButton}
            onPress={() => onGoBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={25} color="#000" />
          </TouchableOpacity>
      {/* <Text>{route.params.image_source}</Text> */}
      <Text style={styles.blog_title}>{data.blogs[1].title}</Text>
      <Text style={styles.content}>{data.blogs[1].content}</Text>
      <Text style={styles.author}>{data.blogs[1].author}</Text>
      <Text style={styles.date}>{data.blogs[1].date}</Text>     
    </View>
    </ScrollView>
    );
}