import React from 'react'
import { Image, StyleSheet, Text, View, Button,  } from 'react-native'

export default function BlockCard(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.sinTitle.title}</Text>
            <Text>{props.sinTitle.author}</Text>
            <Button
              title="read more" 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 7,
        borderColor: '#abdbe3',
        backgroundColor: '#abdbe3',
        margin: 7,
        padding: 7
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})
