import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from './home/index';
import { Post } from './post/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
}