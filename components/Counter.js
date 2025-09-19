import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


export default function Counter(){
    
    
    return(
        <View>
            <Text style={styles.daysCount}>1453</Text>
            <Text style={styles.helperText}>dias restantes!</Text>
        </View> 
    );

};

const styles = StyleSheet.create ({
    daysCount: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#1A3365',
    marginBottom: 5,
  },
  helperText: {
    fontSize: 18,
    color: '#34495E',
    textAlign: 'center',
  },
})