import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './src/pages/LogIn/LogIn';
import SignUp from './src/pages/SignUp/SignUp';
import Success from './src/pages/Success/Success';
import ServiceCatalog from './src/pages/ServiceCatalog/ServiceCatalog';
import {useFonts,Poppins_600SemiBold,Poppins_100Thin_Italic} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';




export default function App() {
  const [fontsLoaded] = useFonts({Poppins_600SemiBold,Poppins_100Thin_Italic})

  if(!fontsLoaded)
    return <AppLoading />

  return <ServiceCatalog />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
