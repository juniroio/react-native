import React from 'react'
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import RenderHTML from 'react-native-render-html'
import { WebView } from 'react-native-webview';


export default function BlogPost({ item, navigation, width }) {

    const previewText = item.content ? item.content + '...' : 'Sem conteúdo';
    const source = { html: `<div style='color: white'></div>` }

    return (
        <TouchableOpacity onPress={() => navigation.navigate('BlogPost', { post: item })} style={styles.postContainer}>
            {item.urlToImage && (
                <Image
                    source={{ uri: item.urlToImage }}
                    style={styles.image}
                />
            )}
            <Text style={styles.title}>{item.title}</Text>
            <WebView
                originWhitelist={['*']}
                source={{ html: '<p>Here I am</p>' }}
            />
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
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,
    },
    webView: {
        width: 100
    }
})

export { BlogPost }