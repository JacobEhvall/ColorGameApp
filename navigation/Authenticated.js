import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BeginGame from '../screens/BeginGame';
import Results from '../screens/Results';

const Stack = createStackNavigator();

export default function Authenticated() {
  return (
    <Stack.Navigator initialRouteName="BeginGame">
      <Stack.Screen name="BeginGame" component={BeginGame} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}
