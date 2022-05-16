import React, { useState,useContext } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView , Button, useWindowDimensions,Alert} from 'react-native'
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './styles';
import DatePicker from 'react-native-date-picker';
import Notifications from '../../Notifications'; 
import {AuthContext} from '../../context';
import Logo from '../../assets/pictures/logo.png';
import { BlogComponent } from '../BlogComponent';
const data=require('../../assets/data.json')
const notifications=require('../../assets/notifications.json')
export function LoginComponent({route, navigation}) {
  const [date, setDate] = useState(new Date());
  const setNotification = () => {
    
    let today = Date.parse(notifications.date[0].timestamp);
    
    Notifications.schduleNotification(new Date(today));
  };
  <Image  source={Logo} style ={[styles.logo, {height:height*0.3}]} resizeMode="contain"/>
    const {height}=useWindowDimensions();
    
    const onBlog1Pressed = () => {
      navigation.navigate('BlogComponent',{
        id:data.blogs[0].id,
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
        id:data.blogs[1].id,
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
        id:data.blogs[2].id,
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
        id:data.blogs[3].id,
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
        id:data.blogs[4].id,
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
        id:data.blogs[5].id,
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
        id:data.blogs[6].id,
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
        id:data.blogs[7].id,
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
        id:data.blogs[8].id,
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
        id:data.blogs[9].id,
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
      <Text></Text>
      <Button
        title="Notify me"
        onPress={setNotification}
      />
      {/* Blog 1 */}
      <View  style = {styles.textual}>
      <Text style ={styles.headingText}>{data.blogs[0].title}</Text>
      <Text numberOfLines={2} style ={styles.text}>{data.blogs[0].content}</Text>
      <Text style ={[styles.text, {fontStyle: 'italic', fontSize: 7}]}>Written by {data.blogs[0].author}</Text>
      <Text style ={[styles.text, {marginLeft: 50, textAlign: "right", fontWeight: 'bold', fontSize: 11}]} onPress = {onBlog1Pressed}>Read More</Text>
      </View>
      <Text></Text>

      {/* Blog 2 */}
      <View  style = {styles.textual}>
      <Text style ={styles.headingText}>{data.blogs[1].title}</Text>
      <Text numberOfLines={2} style ={styles.text}>{data.blogs[1].content}</Text>
      <Text style ={[styles.text, {fontStyle: 'italic', fontSize: 7}]}>Written by {data.blogs[1].author}</Text>
      <Text style ={[styles.text, {marginLeft: 50, textAlign: "right", fontWeight: 'bold', fontSize:11}]} onPress = {onBlog2Pressed}>Read More</Text>
      </View>
      <Text></Text>

      {/* Blog 3 */}
      <View  style = {styles.textual}>
      <Text style ={styles.headingText}>{data.blogs[2].title}</Text>
      <Text numberOfLines={2} style ={styles.text}>{data.blogs[2].content}</Text>
      <Text style ={[styles.text, {fontStyle: 'italic', fontSize: 7}]}>Written by {data.blogs[2].author}</Text>
      <Text style ={[styles.text, {marginLeft: 50, textAlign: "right", fontWeight: 'bold', fontSize:11}]} onPress = {onBlog3Pressed}>Read More</Text>
      </View>
      <Text></Text>

      {/* Blog 4 */}
      <View  style = {styles.textual}>
      <Text style ={styles.headingText}>{data.blogs[3].title}</Text>
      <Text numberOfLines={2} style ={styles.text}>{data.blogs[3].content}</Text>
      <Text style ={[styles.text, {fontStyle: 'italic', fontSize: 7}]}>Written by {data.blogs[0].author}</Text>
      <Text style ={[styles.text, {marginLeft: 50, textAlign: "right", fontWeight: 'bold', fontSize:11}]} onPress = {onBlog4Pressed}>Read More</Text>
      </View>
      <Text></Text>

      {/* Blog 5 */}
      <View  style = {styles.textual}>
      <Text style ={styles.headingText}>{data.blogs[4].title}</Text>
      <Text numberOfLines={2} style ={styles.text}>{data.blogs[4].content}</Text>
      <Text style ={[styles.text, {fontStyle: 'italic', fontSize: 7}]}>Written by {data.blogs[4].author}</Text>
      <Text style ={[styles.text, {marginLeft: 50, textAlign: "right", fontWeight: 'bold', fontSize:11}]} onPress = {onBlog5Pressed}>Read More</Text>
      </View>
      <Text></Text>

      {/* Blog 6 */}
      <View  style = {styles.textual}>
      <Text style ={styles.headingText}>{data.blogs[5].title}</Text>
      <Text numberOfLines={2} style ={styles.text}>{data.blogs[5].content}</Text>
      <Text style ={[styles.text, {fontStyle: 'italic', fontSize: 7}]}>Written by {data.blogs[5].author}</Text>
      <Text style ={[styles.text, {marginLeft: 50, textAlign: "right", fontWeight: 'bold', fontSize:11}]} onPress = {onBlog6Pressed}>Read More</Text>
      </View>
      <Text></Text>

      {/* Blog 7 */}
      <View  style = {styles.textual}>
      <Text style ={styles.headingText}>{data.blogs[6].title}</Text>
      <Text numberOfLines={2} style ={styles.text}>{data.blogs[6].content}</Text>
      <Text style ={[styles.text, {fontStyle: 'italic', fontSize: 7}]}>Written by {data.blogs[6].author}</Text>
      <Text style ={[styles.text, {marginLeft: 50, textAlign: "right", fontWeight: 'bold', fontSize:11}]} onPress = {onBlog7Pressed}>Read More</Text>
      </View>
      <Text></Text>

      {/* Blog 8 */}
      <View  style = {styles.textual}>
      <Text style ={styles.headingText}>{data.blogs[7].title}</Text>
      <Text numberOfLines={2} style ={styles.text}>{data.blogs[7].content}</Text>
      <Text style ={[styles.text, {fontStyle: 'italic', fontSize: 7}]}>Written by {data.blogs[7].author}</Text>
      <Text style ={[styles.text, {marginLeft: 50, textAlign: "right", fontWeight: 'bold', fontSize:11}]} onPress = {onBlog8Pressed}>Read More</Text>
      </View>
      <Text></Text>

      {/* Blog 9 */}
      <View  style = {styles.textual}>
      <Text style ={styles.headingText}>{data.blogs[8].title}</Text>
      <Text numberOfLines={2} style ={styles.text}>{data.blogs[8].content}</Text>
      <Text style ={[styles.text, {fontStyle: 'italic', fontSize: 7}]}>Written by {data.blogs[8].author}</Text>
      <Text style ={[styles.text, {marginLeft: 50, textAlign: "right", fontWeight: 'bold', fontSize:11}]} onPress = {onBlog9Pressed}>Read More</Text>
      </View>
      <Text></Text>

      {/* Blog 10 */}
      <View  style = {styles.textual}>
      <Text style ={styles.headingText}>{data.blogs[9].title}</Text>
      <Text numberOfLines={2} style ={styles.text}>{data.blogs[9].content}</Text>
      <Text style ={[styles.text, {fontStyle: 'italic', fontSize: 7}]}>Written by {data.blogs[9].author}</Text>
      <Text style ={[styles.text, {marginLeft: 50, textAlign: "right", fontWeight: 'bold', fontSize:11}]} onPress = {onBlog10Pressed}>Read More</Text>
      </View>
      
           
    </View>
    </ScrollView>
    );
}