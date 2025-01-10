import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from './home/index';
import { Tarefa } from './tarefa/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tarefas" component={Home} />
      <Stack.Screen name="Tarefa" component={Tarefa} />
    </Stack.Navigator>
  );
}