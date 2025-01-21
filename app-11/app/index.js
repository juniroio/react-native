import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from './home/index';
import { BlogPost } from './post/index';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="BlogPost" component={BlogPost} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    );
}