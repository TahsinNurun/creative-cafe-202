import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View, Image, Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window')

const BlogDetail = () => {

    // const [blogDetail, setBlogDetail] = useState('');
    const [title, setTitle] = useState([]);
    
    useEffect( () => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=dc8b9b4980274e75b6867f68132b3990')
        .then(res => res.json())
        .then(data => setTitle(data.articles))
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
            {/* <Image source={require('')}/> */}
               <View style={styles.contentContainer}>
                  <Text style={styles.title} >title {title.length}</Text>
                  <Text style={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure debitis minus temporibus dolore qui non. Voluptatibus ipsam possimus, voluptate qui illo quis sit saepe? Illum explicabo est at repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure debitis minus temporibus dolore qui non. Voluptatibus ipsam possimus, voluptate qui illo quis sit saepe? Illum explicabo est at repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure debitis minus temporibus dolore qui non. Voluptatibus ipsam possimus, voluptate qui illo quis sit saepe? Illum explicabo est at repudiandae? {}</Text>
               </View>
            </ScrollView>
        </SafeAreaView>    
    )
}

const styles = StyleSheet.create({
    container: {},
    image:{
       width: width,
       height: height/3
    },
    contentContainer: {
        padding: 10
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10
    },
    content: {
        fontSize: 20
    }

});

export default BlogDetail;