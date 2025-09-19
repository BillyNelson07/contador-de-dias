import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          {/* aqui começa o componente Header.js */}
          <Text style={styles.headerText}>DIAS PARA</Text>
          <Text style={styles.dateText}>23 de Junho de 2028{/* inserir a data selecionada do calendario aqui */}</Text>
          {/* aqui termina o componente Header.js */}
          <View style={styles.spacer} />

          <Text style={styles.daysCount}>1453</Text>
          <Text style={styles.helperText}>dias restantes!</Text>

          <View style={styles.spacer} />
          {/* aqui começa o componente Button.js */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Definir Nova Data</Text>
          </TouchableOpacity>
          {/* aqui termina o componente Button.js */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E0E8F9',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E0E8F9',
  },
  card: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495E',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 16,
    color: '#34495E',
  },
  spacer: {
    marginVertical: 30,
  },
  daysCount: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#1A3365',
    marginBottom: 5,
  },
  helperText: {
    fontSize: 18,
    color: '#34495E',
  },
  button: {
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;