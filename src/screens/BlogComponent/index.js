import React, { useState,useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView , Button, useWindowDimensions,Alert} from 'react-native'
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './styles';
import Blog1 from "../../assets/pictures/blog1.png";
import Blog2 from "../../assets/pictures/blog2.jpg";
import blog3 from "../../assets/pictures/blog3.jpg";
import blog4 from "../../assets/pictures/blog4.jpg";
import Blog5 from "../../assets/pictures/blog5.png";
import Blog6 from "../../assets/pictures/blog6.jpg";
import Blog7 from "../../assets/pictures/blog7.jpg";
import Blog8 from "../../assets/pictures/blog8.jpg";
import Blog9 from "../../assets/pictures/blog9.jpg";
import Blog10 from "../../assets/pictures/blog10.png";
import {AuthContext} from '../../context';
export function BlogComponent({route, navigation}) {
    const {height}=useWindowDimensions();
    
    const onGoBack = () => {
      navigation.goBack()
    }
    // const sou = Blog1
    const numbers = [
      require("../../assets/pictures/blog1.png"),
      require("../../assets/pictures/blog2.jpg"),
      require("../../assets/pictures/blog3.jpg"),
      require("../../assets/pictures/blog4.jpg"),
      require("../../assets/pictures/blog5.png"),
      require("../../assets/pictures/blog6.jpg"),
      require("../../assets/pictures/blog7.jpg"),
      require("../../assets/pictures/blog8.jpg"),
      require("../../assets/pictures/blog9.jpg"),
      require("../../assets/pictures/blog10.png"),
      
    ];
    const sou = numbers[route.params.id];
    return (    
      
    <ScrollView style = {styles.scroll}>
    <View style = {styles.root}>
    <Image  source={sou} style ={[styles.logo, {height:height*0.3}]} resizeMode="contain"/>
      <Text style={styles.image_caption}>{route.params.image_caption}</Text>
      <TouchableOpacity 
            style={styles.backButton}
            onPress={() => onGoBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={25} color="#000" />
          </TouchableOpacity>
      
      <Text style={styles.blog_title}>{route.params.blog_title}</Text>
      <Text style={styles.content}>{route.params.blog_content}</Text>
      <Text style={styles.author}>{route.params.author}</Text>
      <Text style={styles.date}>{route.params.date}</Text>     
    </View>
    </ScrollView>
    );
}