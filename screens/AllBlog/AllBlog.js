import React, { useEffect, useState } from 'react';
import { StyleSheet, Text,  ScrollView, Modal, View, Button } from 'react-native'
import BlockCard from '../BlockCard/BlockCard';


export default function AllBlog() {



    const [title, setTitle] = useState([]);
    
    useEffect( () => {
        const url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=dc8b9b4980274e75b6867f68132b3990`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setTitle(data.articles);
            console.log(data.articles)
        })
    }, [])

    return (
        <ScrollView style={styles.container}>
            {
                title.map(sinTitle => <BlockCard sinTitle={sinTitle} key={sinTitle.content}>name {sinTitle.source.name}</BlockCard>)
            }
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        margin: 20
    },
    container: {
        marginTop: 10,
        padding: 10
    }  
})
