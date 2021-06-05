import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import AllBlog from './screens/AllBlog/AllBlog';
import BlogDetail from './screens/BlogDetail/BlogDetail';
import BlogList from './screens/BlogList/BlogList';
import Home from './screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AllBlog" component={AllBlog} />
      </Stack.Navigator>
    </NavigationContainer>         
  );

  // return(
  //     // <BlogList></BlogList>
  //     <AllBlog></AllBlog>
  //     // <BlogDetail></BlogDetail>
  // );

};


