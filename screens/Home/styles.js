import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        flex:1,
        width: '100%',
        height: 700,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        margin: 10,
        fontSize: 80,
        fontWeight: 'bold',
        color: '#fff2e6',
        width: '70%'
    },
    explore: {
        margin: 10,
        width: '60%',
        height: 70,
        backgroundColor: '#fff2e6'
    }
});

export default styles;