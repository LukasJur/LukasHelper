import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import HomeScreen  from './components/HomeScreen';

const App = () => {
  // console.log(DefaultTheme);
  return (
  <PaperProvider>
    <HomeScreen/>  
  </PaperProvider>
  );
}

export default App;