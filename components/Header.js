import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';


LocaleConfig.locales['br'] = {
monthNames: [
'Janeiro',
'Fevereiro',
'Março',
'Abril',
'Maio',
'Junho',
'Julho',
'Agosto',
'Setembro',
'Outubro',
'Novembro',
'Dezembro'
],
monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
today: "Hoje"
};

export default function Header({chooseDate, setChooseDate}){
    
    
    return(
        <View>
            <Text style={styles.headerText}>DIAS PARA</Text>
            <Calendar
            style={{padding: 10, width: 300, height: 320}}
                onDayPress={day => {
                setChooseDate(day.dateString);
                }}
                markedDates={{
                [chooseDate]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                }}
            />
        </View>
    );

};

const styles = StyleSheet.create ({
    headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495E',
    marginBottom: 5,
    textAlign: 'center',
},
    dateText: {
    fontSize: 16,
    color: '#34495E',
},
})