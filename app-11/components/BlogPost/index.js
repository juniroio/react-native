import React from 'react'
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


export default function BlogPost({ item, navigation }) {

    return (
        <TouchableOpacity onPress={() => navigation.navigate('BlogPost', { id: item.id })} style={styles.postContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.phone}>{item.phone}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    postContainer: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    phone: {
        color: 'white',
        fontSize: 12,
        marginTop: 3,
        marginBottom: 5
    }
})

export { BlogPost }