import { View, Text, StyleSheet, TouchableOpacity, Appearance, useColorScheme } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

type NavProps = NativeStackNavigationProp<RootStackParamList, 'Administração'>;

export default function AdmScreen() {

    const colorScheme = Appearance.getColorScheme();

    const navigation = useNavigation<NavProps>();

    const [isPressedPeople, setIsPressedPeople] = useState(false);
    const [isPressedTicket, setIsPressedTicket] = useState(false);
    const [isPressedQR, setIsPressedQR] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>QR Fast</Text>
            <Text style={styles.subtitle}>Controle de entradas</Text>

            
                <TouchableOpacity onPressOut={() => setIsPressedPeople(false)} onPressIn={() => setIsPressedPeople(true)} onPress={() => navigation.navigate('Pessoas')}>
                    <LinearGradient 
                    // Tons de amarelo/dourado para efeito de brilho
                    colors={['#b2d3bc', '#bed1c4', '#99b19f', '#b2d3bc']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={isPressedPeople ? styles.buttonPressed : styles.button}
                    >
                        <Text style={styles.cardTitle}>👥 Pessoas</Text>
                        <Text style={styles.cardSubtitle}>Cadastrar e gerenciar</Text>  
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPressOut={() => setIsPressedTicket(false)} onPressIn={() => setIsPressedTicket(true)} onPress={() => navigation.navigate('Tickets')}>
                    <LinearGradient 
                    // Tons de amarelo/dourado para efeito de brilho
                    colors={['#b2d3bc', '#bed1c4', '#99b19f', '#b2d3bc']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={isPressedTicket ? styles.buttonPressed : styles.button}
                    >
                        <Text style={styles.cardTitle}>🎟️ Ingressos</Text>
                        <Text style={styles.cardSubtitle}> QR Codes gerados</Text>  
                    </LinearGradient>          
                </TouchableOpacity>

                <TouchableOpacity onPressOut={() => setIsPressedQR(false)} onPressIn={() => setIsPressedQR(true)} onPress={() => navigation.navigate('Scanner')}>
                    <LinearGradient 
                  // Tons de amarelo/dourado para efeito de brilho
                    colors={['#3BB85E', '#376b4d', '#0A7D27']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={isPressedQR ? styles.buttonQRPressed : styles.buttonQR}
                    >
                        <Text style={styles.cardTitle}>📷 Ler QR Code</Text>
                        <Text style={styles.cardSubtitle}>Entrada no evento</Text>
                    </LinearGradient>
                </TouchableOpacity>
  
            {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>Trocar</TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f2e9',
        width: '100%',
    },
    title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 32,
        color: '#666',
    },
    button: {
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 90,
        borderWidth: 1,
        borderColor: 'black',
        alignContent: 'center',
        shadowColor: '#030303',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        marginBottom: 14,
        minWidth: 320,
    },
    buttonPressed: {
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 90,
        borderWidth: 1,
        borderColor: 'black',
        alignContent: 'center',
        shadowColor: '#030303',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        marginBottom: 14,
        minWidth: 360,    
    },
    buttonQR: {
        backgroundColor: '#a16d6d',
        borderRadius: 10,
        paddingVertical: 50,
        paddingHorizontal: 90,
        borderWidth: 1,
        borderColor: 'black',
        alignContent: 'center',
        shadowColor: '#030303',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 20,
        marginBottom: 14,
        marginTop: 30,
        minWidth: 320,
    },
    buttonQRPressed: {
        backgroundColor: '#a16d6d',
        borderRadius: 10,
        paddingVertical: 50,
        paddingHorizontal: 90,
        borderWidth: 1,
        borderColor: 'black',
        alignContent: 'center',
        shadowColor: '#030303',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 20,
        marginBottom: 14,
        marginTop: 30,
        minWidth: 360,
    },
    cardTitle: {
        color: 'white',
        fontWeight: 'bold',
        paddingBottom: 8,
        fontSize: 18,
        textAlign: 'center'
    },
    cardSubtitle: {
        color: 'white',
        fontStyle: 'italic',
        textAlign: 'center'
    },
});