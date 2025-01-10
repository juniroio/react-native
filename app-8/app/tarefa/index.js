import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Tarefa({ navigation, route }) {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{route.params.titulo}</Text>
            <Text style={styles.date}>{route.params.data}</Text>
            <Text style={styles.description}>{route.params.descricao}</Text>

            <TouchableOpacity 
                style={styles.backButton} 
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2BE0AD',
        marginBottom: 10,
    },

    date: {
        fontSize: 18,
        color: '#777',
        marginBottom: 20,
    },

    description: {
        fontSize: 16,
        color: '#333',
        lineHeight: 22,
    },

    backButton: {
        marginTop: 30,
        backgroundColor: '#2BE0AD',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },

    backButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export {Tarefa}