import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';


export default function BlogPost({ route }) {
    const getPostNaAPI = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`);
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
                    <Text style={styles.text}>Nome: {post.name}</Text>
                    <Text style={styles.text}>Usuário: {post.username}</Text>
                    <Text style={styles.text}>Email: {post.email}</Text>
                    <Text style={styles.text}>Contato: {post.phone}</Text>
                    <Text style={styles.text}>Site: {post.website}</Text>

                    <View style={styles.ul}>
                        <Text style={styles.title}>Endereço</Text>
                        <Text style={styles.li}>Rua: {post.address.street}</Text>
                        <Text style={styles.li}>Unidade: {post.address.suite}</Text>
                        <Text style={styles.li}>Cidade: {post.address.city}</Text>
                        <Text style={styles.li}>CEP: {post.address.zipcode}</Text>

                        <View style={styles.subUl}>
                            <Text style={styles.title}>Geo</Text>
                            <Text style={styles.li}>Lat: {post.address.geo.lat}</Text>
                            <Text style={styles.li}>Lng: {post.address.geo.lng}</Text>
                        </View>
                    </View>

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
        backgroundColor: 'black',
    },
    text: {
        backgroundColor: 'white',
        marginBottom: 7,
        fontSize: 20,
        color: 'black',
        padding: 8,
        borderRadius: 4,
    },
    li: {
        marginLeft: 15,
        marginBottom: 3,
        fontSize: 20,
        color: 'black',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 3,
        fontSize: 20,
        color: 'black',
    },
    ul: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 4,
    },
    subUl: {
        marginLeft: 15,
    }
})

export { BlogPost }