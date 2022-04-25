import React, { useState,useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView , Button, useWindowDimensions,Alert} from 'react-native'
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './styles';
import {AuthContext} from '../../context';
//const data=require('../../assets/data.json')
export function BlogComponent({route, navigation}) {
 
    const {height}=useWindowDimensions();
    const onBlog1Pressed = () => {
      var temp = data.blogs[0].content;
      console.warn(temp)
    }

    const onGoBack = () => {
      navigation.goBack()
    }

    return (    
    <ScrollView style = {styles.scroll}>
      {/* <Image  source={route.params.image_source} style ={[styles.logo, {height:height*0.3}]} resizeMode="contain"/> */}
    <View style = {styles.root}>
    <Image  source={route.params.image_source} style ={[styles.logo, {height:height*0.3}]} resizeMode="contain"/>
      <Text style={styles.image_caption}>{route.params.image_caption}</Text>
      <TouchableOpacity
            style={styles.backButton}
            onPress={() => onGoBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={25} color="#000" />
          </TouchableOpacity>
      {/* <Text>{route.params.image_source}</Text> */}
      <Text style={styles.blog_title}>{route.params.blog_title}</Text>
      <Text style={styles.content}>{route.params.blog_content}</Text>
      <Text style={styles.author}>{route.params.author}</Text>
      <Text style={styles.date}>{route.params.date}</Text>     
    </View>
    </ScrollView>
    );
}