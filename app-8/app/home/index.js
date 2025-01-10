import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TextInput, Button, TouchableHighlight, StyleSheet } from 'react-native';

function Item(props) {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{props.title}</Text>
        </View>
    );
}

export default function Home({ navigation }) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');
    const [tarefa, setTarefa] = useState([]);

    function addTarefa() {
        if (titulo && descricao && data) {
            const novaTarefa = {
                id: Math.random().toString(),
                titulo,
                descricao,
                data
            };
            setTarefa((tarefa) => [...tarefa, novaTarefa]);
            setTitulo('');
            setDescricao('');
            setData('');
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput 
                style={styles.input} 
                placeholder='Título' 
                value={titulo} 
                onChangeText={setTitulo} 
            />
            <TextInput 
                style={styles.input} 
                placeholder='Descrição' 
                value={descricao} 
                onChangeText={setDescricao} 
            />
            <TextInput 
                style={styles.input} 
                placeholder='Data' 
                value={data} 
                onChangeText={setData} 
            />
            <Button title='Adicionar Tarefa' onPress={addTarefa} color="#2BE0AD" />
            <View style={styles.tarefas}>
                <FlatList
                    data={tarefa}
                    renderItem={({ item }) => (
                        <View style={styles.tarefa}>
                            <Text style={styles.tarefaTitulo}>{item.titulo}</Text>
                            <TouchableHighlight
                                activeOpacity={0.6}
                                underlayColor="#D3D3D3"
                                onPress={() => { navigation.navigate('Tarefa', { titulo: item.titulo, descricao: item.descricao, data: item.data }) }}
                            >
                                <Text style={styles.detailsText}>Mais detalhes</Text>
                            </TouchableHighlight>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
    },

    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 15,
        borderRadius: 8,
        backgroundColor: '#fff',
    },

    tarefas: {
        width: '100%',
        marginTop: 20,
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },

    tarefa: {
        backgroundColor: '#2BE0AD',
        marginBottom: 15,
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },

    tarefaTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },

    detailsText: {
        color: 'white',
        marginTop: 10,
        fontWeight: 'bold',
    },

    itemContainer: {
        height: 60,
        backgroundColor: '#AFC',
        padding: 10,
        margin: 10,
    },

    itemText: {
        color: '#000',
    },
});

export {Home}