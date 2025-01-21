import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Text, Image, ActivityIndicator, TouchableOpacity, useWindowDimensions } from 'react-native'
import BlogPost from '../../components/BlogPost/index'


export default function Home({ navigation }) {

    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { width } = useWindowDimensions();

    const getPostsAPI = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=81a00f1e36244c3cb43937d4557713c7')
            const posts = await response.json()
            setPosts(posts.articles)
        } catch (error) {
            alert('Falha ao carregar postagens. Tente novamente mais tarde.')
            setPosts([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getPostsAPI()
    }, [])

    return (
        <View style={styles.container}>
            {isLoading
                ? <ActivityIndicator />
                :
                    <FlatList data={posts} renderItem={({ item }) => <BlogPost width={width} navigation={navigation} item={item} />} keyExtractor={(item, index) => index.toString()} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'black',
    },
    postContainer: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover', // Ajusta a imagem para cobrir a área
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,
    },
})

export { Home }