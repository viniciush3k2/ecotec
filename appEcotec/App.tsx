import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './src/pages/LogIn/LogIn';
import SignUp from './src/pages/SignUp/SignUp';
import Success from './src/pages/Success/Success';

export default function App() {
  return <LogIn/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
