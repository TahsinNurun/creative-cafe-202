import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Button, Modal, ScrollView  } from 'react-native'
import BlogDetail from '../BlogDetail/BlogDetail';

export default function BlockCard(props) {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.sinTitle.title}</Text>
            <Text>{props.sinTitle.author}</Text>
            <Button
              title="read more" 
              onPress={() => setModalOpen(true)}
            />
            <Modal 
            visible={modalOpen}
            >
                <ScrollView style={{backgroundColor: '#000000aa', flex: 1}}>
                    <ScrollView style={{backgroundColor: '#ffffff', margin: 30, padding: 20, borderRadius: 10, flex: 1 }}>
                        <BlogDetail></BlogDetail>
                    </ScrollView>
                    <Button title="done"
                    onPress={() => setModalOpen(false)}
                    />
                </ScrollView>   
            </Modal>
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
        padding: 10
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})
