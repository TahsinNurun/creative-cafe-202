// Home component
import React from 'react';
import { View, ImageBackground, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View>
            <ImageBackground 
            source = {require('../../assets/Images/bg.png')} // image for our sourch
            style = {styles.image}>
                <Text style={styles.title}>CREATIVE CAFE</Text>
                <Button style={styles.button}
                    title="explore"
                    onPress={() => navigation.navigate("AllBlog")}/> 
            </ImageBackground>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 700,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        marginTop: 10,
        fontSize: 60,
        fontWeight: 'bold',
        color: '#fff2e6',
        width: '70%'
    },
    button: {
        width:'60%',
        backgroundColor: '#abdbe3'
    }
    // explore: {
    //     margin: 10,
    //     width: '60%',
    //     height: 70,
    //     backgroundColor: '#fff2e6'
    // }
})

