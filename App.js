import React from 'react';
import AuthNavigation from './navigation/AuthNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContextProvider from './context/AuthContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      <AuthNavigation />
    </AuthContextProvider>
  );
}
