import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import AllBlog from './screens/AllBlog/AllBlog';
import BlogDetail from './screens/BlogDetail/BlogDetail';
import BlogList from './screens/BlogList/BlogList';
import Home from './screens/Home/Home';

export default function App() {
  return (
    <>
    <SafeAreaView >
      <Home/>  
    </SafeAreaView>
    </>
  );

  // return(
  //     // <BlogList></BlogList>
  //     <AllBlog></AllBlog>
  //     // <BlogDetail></BlogDetail>
  // );

};


