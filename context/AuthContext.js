import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../Firebase';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const unsubscribe = useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log('user:', user);
      setUser(user);
    });

    return unsubscribe;
  });

  const logIn = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('logIn');
      // setIsLoggedIn(true)
    } catch (error) {
      console.log('error: ', error);
    }
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, user, setIsLoggedIn, logIn }}>
      {children}
    </AuthContext.Provider>
  );
}
