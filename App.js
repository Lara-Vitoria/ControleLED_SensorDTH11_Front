import { View, StyleSheet } from 'react-native';
import React from 'react';

import Header from './src/components/Header';
import Footer from './src/components/Footer';
import LedVermelho from './src/components/LedVermelho';
import LedVerde from './src/components/LedVerde';
import Umidade from './src/components/Umidade';
import Temperatura from './src/components/Temperatura';

export default function App() {
  return (
    <>
      <Header /> 

      <View style={styles.container}>
        <LedVermelho />
        <LedVerde />
        <Umidade />
        <Temperatura />
      </View>

      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
