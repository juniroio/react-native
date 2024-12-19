import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TextInput, Button } from 'react-native';

//~~o~~*~~o~~*~~o~~*~~o~~*~~o~~*~~o~~*~~o~~*~~
//         ✩ Feliz Natal Aluízio ✩
//~~*~~o~~*~~o~~*~~o~~*~~o~~*~~o~~*~~o~~*~~o~~

function Item(props) {
  return (
    <View style={styles.listaItem}>
      <Text style={styles.textItem}>{props.title}</Text>
      <Text style={styles.textItem}>{props.descricao}</Text>
      <Text style={styles.textItem}>{props.data}</Text>
    </View>
  );
}

export default function App() {
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
      <View style={styles.form}>
      <TextInput 
        placeholder="Título" 
        value={titulo} 
        onChangeText={setTitulo} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Descrição" 
        value={descricao} 
        onChangeText={setDescricao} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Data" 
        value={data} 
        onChangeText={setData} 
        style={styles.input} 
      />
      </View>
      <View style={styles.botao}>
        <Button 
          title="Adicionar Tarefa" 
          onPress={addTarefa} 
          color="#4CAF50" 
        />
      </View>
      <FlatList
        data={tarefa}
        renderItem={({ item }) => (
          <Item 
            title={item.titulo} 
            descricao={item.descricao} 
            data={item.data} 
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    flex: 1,
    borderRadius: 5,
  },
  botao: {
    width: '80%',
    marginVertical: 10,
    borderRadius: 5,
  },
  listaItem: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#e0f7fa',
    borderColor: '#00796b',
    borderWidth: 1,
    width: '90%',
    borderRadius: 5,
  },
  textItem: {
    fontSize: 16,
    fontWeight: 'bold', 
    color: '#00796b',
  },
  form: {
    width: '90%',
    alignItems: 'center',
    height: 200,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
};