import React, { useState } from 'react';
import { Button, SafeAreaView, Switch, Text, TextInput, View } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('')
  const [displayImc, setDisplayImc] = useState(<></>)
  const [altura, setAltura] = useState('')

  function imcCalc(peso, altura) {
    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);

    const imc = pesoNum / (alturaNum * alturaNum);

    let categoria = '';
    if (imc < 18.5) {
      categoria = 'Abaixo de Peso';
    } else if (imc >= 18.5 && imc < 25) {
      categoria = 'Peso Normal';
    } else if (imc >= 25 && imc < 30) {
      categoria = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
      categoria = 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 40) {
      categoria = 'Obesidade Grau II';
    } else if (imc >= 40) {
      categoria = 'Obesidade Mórbida';
    }

    setDisplayImc(
      <View>
        <Text>Com um peso de {peso} kg</Text>
        <Text>e uma altura de {altura} m</Text>
        <Text>Seu IMC é: {imc.toFixed(2)}</Text>
        <Text>Você está classificado como: {categoria}</Text>
      </View>
    );
  }

  function submitImc(){
    if (peso.trim() === '' || altura.trim() === '') {
      setDisplayImc(<Text>digite algo</Text>);
    } else if (isNaN(peso) || isNaN(altura)) {
      setDisplayImc(<Text>digite um número válido</Text>);
    } else {
      imcCalc(peso, altura);
    }
  }

  return (
    <SafeAreaView>
      <TextInput placeholder='digite seu peso' value={peso} onChangeText={setPeso}></TextInput>
      <TextInput placeholder='digite sua altura' value={altura} onChangeText={setAltura}></TextInput>
      <Button onPress={submitImc} title='calcular imc'></Button>
      <>{displayImc}</>
    </SafeAreaView>
  );
}