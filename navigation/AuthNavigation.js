import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './Authenticated';
import NotAuth from './NotAutenticated';
import { AuthContext } from '../context/AuthContext';

export default function AuthNavigation() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>{user ? <Auth /> : <NotAuth />}</NavigationContainer>
  );
}
