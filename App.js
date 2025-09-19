import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Counter from './components/Counter';
import Button from './components/Button';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          
          <Header></Header>
          
          <View style={styles.spacer} />

          <Counter></Counter>

          <View style={styles.spacer} />
          
          <Button></Button>

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
  spacer: {
    marginVertical: 30,
  },
});

export default App;