import React, {useContext, useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Linking} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './pdfStyle';
import {AuthContext} from '../../context';
import Pdf from 'react-native-pdf';

MaterialIcons.loadFont().then();

export function viewPdf({route, navigation}) {

  const {state, dispatch} = useContext(AuthContext);
  const {url} = route.params; 

  //const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
  const source = {uri : url, cache: true};

  const handleBackButton = () => {
    navigation?.goBack();
  };

  return (
    <View style={styles.coursesListContainer}>
    <View style={[styles.bgContainer]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => handleBackButton()}>
          <MaterialIcons name="keyboard-arrow-left" size={25} color="#000" />
        </TouchableOpacity>
    </View>  
    <View style={{flex:1}}>
    <Pdf
        source={source}
        // onLoadComplete={(numberOfPages,filePath) => {
        //     console.log(`Number of pages: ${numberOfPages}`);
        // }}
        // onPageChanged={(page,numberOfPages) => {
        //     console.log(`Current page: ${page}`);
        // }}
        // onError={(error) => {
        //     console.log(error);
        // }}
        // onPressLink={(uri) => {
        //     console.log(`Link pressed: ${uri}`);
        // }}
        style={styles.pdf}/>
</View>
</View>
  );
}
