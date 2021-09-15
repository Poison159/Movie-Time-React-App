import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ImageScreen from "./src/screens/ImageScreen";
import LandingScreen from './src/screens/LandingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Movie Search" 
          component={HomeScreen} />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} />
        <Stack.Screen 
          name="BigImageView"
          component={ImageScreen} />
        <Stack.Screen 
          name="Landing" 
          component={LandingScreen} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
