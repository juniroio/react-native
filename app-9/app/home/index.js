import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';



export default function Home({ navigation }) {
    const getPostsNaAPI = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json();
            setPosts(posts);
        } catch (error) {
            setPosts([]);
            alert('Falha ao acessar servidor. Tente novamente mais tarde!');
        } finally {
            setLoading(false);
        }
    };

    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getPostsNaAPI();
    }, []);

    return (
        <View style={styles.home}>
            {isLoading
                ? <ActivityIndicator />
                : <FlatList data={posts} renderItem={({ item }) => (
                    <TouchableOpacity style={styles.post} onPress={() => navigation.navigate('Post', { id: item.id })}>
                        <Text style={styles.text}>{item.title}</Text>
                    </TouchableOpacity>
                )} keyExtractor={item => item.id.toString()} />
            }
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        padding: 10,
        backgroundColor: 'lightgrey',
    },
    post: {
        padding: 5,
        marginBottom: 10,
        backgroundColor: 'white',
        borderBlockColor: 'darkblue',
        borderStyle: 'solid',
        borderWidth: 2,
    },
    text: {
        color: 'darkblue',
    }
})

export { Home }