import React, { useState } from 'react';
import { Button, SafeAreaView, Switch, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <Welcome />
      <Input />
      <Botoes texto="Clique aqui" />
    </SafeAreaView>
  );
}

function onPressButton() {
  alert('Você clicou!');
}

function Botoes(props) {

  const [ligado, setLigado] = useState(false)

  return (
    <View>
      <Button onPress={onPressButton} title={props.texto}></Button>
      <Switch onValueChange={() => setLigado(!ligado)} value={ligado}></Switch>
    </View>
  )
}

function Input() {

  const [text, setText] = useState('')

  return (
    <View>
      <TextInput style={{ height: 40 }} placeholder="Digite aqui seu nome" value={text} onChangeText={(text) => setText(text)}>
      </TextInput>
      <Text>{text}</Text>
    </View>
  )
}

function Welcome() {
  return (
    <View>
      <Text>Bem vindo!</Text>
    </View>
  )
}