import React from 'react'
import { StyleSheet, Text, View, StatusBar} from 'react-native'

const BlogList = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.categoryTitle}>CATEGORY</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#0FADF1'
    },
    categoryTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default BlogList;


