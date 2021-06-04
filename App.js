import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import BlogDetail from './screens/BlogDetail/BlogDetail';
import BlogList from './screens/BlogList/BlogList';
import Home from './screens/Home/Home';

export default function App() {
  // return (
  //   <>
  //   <SafeAreaView >
  //     <Home/>
      
  //   </SafeAreaView>
  //   </>
  // );

  return(
      // <BlogList></BlogList>
      <BlogDetail></BlogDetail>
  );

};


