import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  pdf: {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
},
coursesListContainer: {
  flex: 1,
  backgroundColor: '#FFFFFF',
},
bgContainer: {
  width: '100%',
  height: '5%',
},
backButton: {
  position: 'absolute',
  top: 16,
  left: 16,
  backgroundColor: '#eee',
  height: 32,
  width: 32,
  borderRadius: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
});


export default styles;
