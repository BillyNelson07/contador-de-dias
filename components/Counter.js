import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Header from './Header';
import Day from 'react-native-calendars/src/calendar/day';


export default function Counter({chooseDate}){
    
  const calculateDaysLeft = () => {
        if (!chooseDate) return '';

        const selectedDate = new Date(chooseDate);
        const today = new Date();
        
        selectedDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
    
        const differenceInTime = selectedDate.getTime() - today.getTime();
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    
        return differenceInDays;
      };
    
    const daysLeft = calculateDaysLeft();
    
    return(
        <View>
            <Text style={styles.daysCount}>{daysLeft}</Text>
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