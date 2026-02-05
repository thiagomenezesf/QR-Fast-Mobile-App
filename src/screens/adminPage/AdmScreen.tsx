import { View, Text, StyleSheet, TouchableOpacity, Appearance, useColorScheme } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Button from '../../components/Button';

type NavProps = NativeStackNavigationProp<RootStackParamList, 'Administração'>;

export default function AdmScreen() {

    const colorScheme = Appearance.getColorScheme();

    const navigation = useNavigation<NavProps>();


    const [isPressedQR, setIsPressedQR] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>QR Fast</Text>
            <Text style={styles.subtitle}>Controle de entradas</Text>

            <Button
                rota="Pessoas"
                titulo="👥 Pessoas"
                subtitulo="Cadastrar e gerenciar"
            />

            <Button
                rota="Tickets"
                titulo="🎟️ Ingressos"
                subtitulo="QR Codes gerados"
            />

            <TouchableOpacity onPressOut={() => setIsPressedQR(false)} onPressIn={() => setIsPressedQR(true)} onPress={() => navigation.navigate('Scanner')}>
                <LinearGradient
                    colors={['#3BB85E', '#376b4d', '#0A7D27']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={isPressedQR ? styles.buttonQRPressed : styles.buttonQR}
                >
                    <Text style={styles.cardTitle}>📷 Ler QR Code</Text>
                    <Text style={styles.cardSubtitle}>Entrada no evento</Text>
                </LinearGradient>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
        marginBottom: '20%',
        color: '#666',
    },
    buttonQR: {
        backgroundColor: '#a16d6d',
        borderRadius: 10,
        paddingVertical: '20%',
        paddingHorizontal: '20%',
        borderWidth: 1,
        borderColor: 'black',
        alignContent: 'center',
        shadowColor: '#030303',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 20,
        marginTop: '18%',
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
        paddingBottom: '4%',
        fontSize: 22,
        textAlign: 'center'
    },
    cardSubtitle: {
        color: 'white',
        fontStyle: 'italic',
        textAlign: 'center',
        fontSize: 16,
    },
});