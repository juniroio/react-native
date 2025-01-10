//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//          RECOMENDO USAR UM CELULAR DE 1080 2400 PIXEIS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//      ou seja o celular que já vem baixado no android studio

import React from 'react';
import { StyleSheet, View, Image, FlatList, Text } from 'react-native';

export default function App() {
  const imagens = [
    { id: Math.random().toString(), url: require('@/assets/images/manoel-gomes-1.jpg'), origem: 'local' },
    { id: Math.random().toString(), url: require('@/assets/images/manoel-gomes-2.jpg'), origem: 'local' },
    { id: Math.random().toString(), url: require('@/assets/images/manoel-gomes-3.jpg'), origem: 'local' },
    { id: Math.random().toString(), url: require('@/assets/images/manoel-gomes-4.jpg'), origem: 'local' },
    { id: Math.random().toString(), url: require('@/assets/images/manoel-gomes-5.jpeg'), origem: 'local' },
    { id: Math.random().toString(), url: require('@/assets/images/manoel-gomes-6.jpg'), origem: 'local' },
    { id: Math.random().toString(), url: require('@/assets/images/manoel-gomes-7.jpg'), origem: 'local' },
    { id: Math.random().toString(), url: require('@/assets/images/manoel-gomes-8.jpg'), origem: 'local' },
    { id: Math.random().toString(), url: require('@/assets/images/manoel-gomes-9.jpg'), origem: 'local' },
    { id: Math.random().toString(), url: require('@/assets/images/manoel-gomes-10.jpg'), origem: 'local' },
    { id: Math.random().toString(), url: require('@/assets/images/manoel-gomes-11.jpg'), origem: 'local' },
    { id: Math.random().toString(), url: require('@/assets/images/manoel-gomes-12.jpg'), origem: 'local' },
  ];

  return (
    <>
      <View style={styles.title}>
        <Text style={styles.h1}>GALERIA</Text>
      </View>
      

      <View style={styles.container}>
        <FlatList
          data={imagens}
          renderItem={({ item }) => (
            <Image style={styles.imagem} source={item.url} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={4}
          columnWrapperStyle={styles.row}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imagem: {
    width: 90,
    height: 90,
    margin: 3,
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f11',
  },
  container: {
    flex: 20,
    backgroundColor: '#ddd',
  },
  row: {
    justifyContent: 'space-between',
  },
});