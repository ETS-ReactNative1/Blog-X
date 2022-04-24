import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import CustomButton from '../components/CustomButton/CustomButton';
import {Home, 
  LoginComponent,
  //RegisterComponent,
  coursesList,
  MyRoadmaps,
  createRoadmap, 
  initRoadmap, 
  readingList, 
  updateInitRoadmap,
  updateRoadmap, 
  SavedList, 
  viewPdf, 
  viewLevels, 
  viewList} from '../screens';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RegisterComponent } from '../screens/RegisterComponent';
import { ForgotPasswordComponent } from '../screens/ForgotPasswordComponent';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
MaterialIcons.loadFont().then();
const onSignOut = () => {
  console.warn("Sign in Google");
}
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="Login"
        component={LoginComponent}
        options={{headerShown: false}}
      />
      
    </Drawer.Navigator>
  );
};

const SingleStack = () => {
  return (
    <Stack.Navigator>
      
      
    </Stack.Navigator>
    
  );
};

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="DrawerStack">
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SingleStack"
        component={SingleStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
