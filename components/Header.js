import { StyleSheet, Text, View, StyleSheet } from 'react-native';

export default function Header(){
    
    
    return(
        <View>
            <Text style={styles.headerText}>DIAS PARA</Text>
            <Text style={styles.dateText}>23 de Junho de 2028{/* inserir a data selecionada do calendario aqui */}</Text>
        </View>
    );

    const styles = StyleSheet.create ({
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
    })
}