import React from 'react';
import { View, ImageBackground, Text, Button, } from 'react-native';
import styles from './styles'

const Home = (props) => {
    return (
        <View>
            <ImageBackground 
            source = {require('../../assets/Images/bg.png')} 
            style = {styles.image}>

                <Text style={styles.title}>Creative cafe</Text>

                {/* <Button
                  onPress={onPressLearnMore}
                  title="Learn More"
                  color="#841584"
                /> */}
                <View style ={styles.explore}></View>
                
            </ImageBackground>
        </View>
    );
};

export default Home;
