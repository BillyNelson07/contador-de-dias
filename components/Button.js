import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';


export default function MainButton(){
 const [chooseDate, setChooseDate] = useState(false)

 const buttonPress = () => {

 }
    
    return(
        <View>
            <Button
            title={chooseDate ? "" : "Definir nova data"}
            onPress={() => setChooseDate(!openCalendar)}
            
            />
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