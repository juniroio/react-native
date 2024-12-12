import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TextInput, Button } from 'react-native';

const DATA = [
  {
    title: "Pratos principais",
    data: ["Pizza", "Burger", "Risoto"]
  }
]

function Item(props) {

  return (
    <View style={{ height: 60, backgroundColor: '#AFC', padding: 10, margin: 10 }}>
      <Text>{props.title}</Text>
    </View>
  )
}

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [tarefa, setTarefa] = useState([]);

  function addTarefa(){
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
    <SafeAreaView>
      <TextInput placeholder='título' value={titulo} onChangeText={setTitulo}></TextInput>
      <TextInput placeholder='descrição' value={descricao} onChangeText={setDescricao}></TextInput>
      <TextInput placeholder='data' value={data} onChangeText={setData}></TextInput>
      <Button title='adicionar tarefa' onPress={addTarefa}></Button>
      <FlatList
        data={tarefa}
        renderItem={({ item }) => (
          <View>
            <Text>{item.titulo}</Text>
            <Text>{item.descricao}</Text>
            <Text>{item.data}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}