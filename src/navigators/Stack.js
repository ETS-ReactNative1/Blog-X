import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import CustomButton from '../components/CustomButton/CustomButton';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BlogComponent,LoginComponent } from '../screens';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
MaterialIcons.loadFont().then();
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="Login"
        component={LoginComponent}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="BlogComponent"
        component={BlogComponent}
        options={{headerShown: false}}
      />
      
    </Drawer.Navigator>
  );
};

// const SingleStack = () => {
//   return (
//     <Stack.Navigator>
//       <Drawer.Screen
//         name="BlogComponent"
//         component={BlogComponent}
//         options={{headerShown: false}}
//       />
      
//     </Stack.Navigator>
    
//   );
// };

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="DrawerStack"
    
      >
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="SingleStack"
        component={SingleStack}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}

export default AppStack;
