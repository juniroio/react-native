import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

const Item = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    )
}

export default function App() {
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
            setLoading(false)
        }
    };

    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getPostsNaAPI();
    }, []);

    return (
        <View>
            {isLoading
                ? <ActivityIndicator />
                : <FlatList data={posts} renderItem={Item} keyExtractor={item => item.id.toString()} />
            }
            <StatusBar style="auto" />
        </View>
    );
}