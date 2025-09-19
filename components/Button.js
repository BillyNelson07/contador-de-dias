import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';


export default function Button(){
    
    
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Definir Nova Data</Text>
            </TouchableOpacity>
        </View> 
    );

};

const styles = StyleSheet.create ({
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
})