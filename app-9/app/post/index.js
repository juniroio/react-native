import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';


export default function Post({ route }) {
    const getPostNaAPI = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
            const post = await response.json();
            setPost(post);
        } catch (error) {
            setPost([]);
            alert('Falha ao acessar servidor. Tente novamente mais tarde!');
        } finally {
            setLoading(false);
        }
    };

    const [post, setPost] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getPostNaAPI();
    }, []);

    return (
        <View style={styles.post}>
            {isLoading
                ? <ActivityIndicator />
                :
                <>
                    <Text style={styles.text}>id: {post.id}</Text>
                    <Text style={styles.text}>título: {post.title}</Text>
                    <Text style={styles.text}>corpo: {post.body}</Text>
                </>
            }
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        flex: 1,
        padding: 6,
        backgroundColor: 'lightgrey',
    },
    text: {
        backgroundColor: 'white',
        marginBottom: 7,
        fontSize: 20,
        color: 'black',
        padding: 8,
        borderRadius: 4,
    }
})

export { Post }