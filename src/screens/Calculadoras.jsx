import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculadoras = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma Calculadora</Text>

      {/* Botão para Juros Compostos */}
      <TouchableOpacity 
        style={[styles.optionButton, { backgroundColor: 'purple' }]} 
        onPress={() => navigation.navigate('CalcularJurosCompostos')}
      >
        <Text style={styles.optionText}>Juros Compostos</Text>
      </TouchableOpacity>

      {/* Botão para Juros Simples */}
      <TouchableOpacity 
        style={[styles.optionButton, { backgroundColor: 'purple' }]} 
        onPress={() => navigation.navigate('CalcularJurosSimples')}
      >
        <Text style={styles.optionText}>Juros Simples</Text>
      </TouchableOpacity>

      {/* Botão para outra calculadora */}
      <TouchableOpacity 
        style={[styles.optionButton, { backgroundColor: 'purple' }]} 
        onPress={() => navigation.navigate('AcompanharRendimentoCdi')}
      >
        <Text style={styles.optionText}>Acompanhar Rendimento CDI</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'purple',
  },
  optionButton: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: 'white',
  },
});

export default Calculadoras;
