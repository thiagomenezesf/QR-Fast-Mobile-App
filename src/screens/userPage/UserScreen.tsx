import { View, Text, StyleSheet, TouchableOpacity, Appearance, useColorScheme } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Button from '../../components/Button';

type NavProps = NativeStackNavigationProp<RootStackParamList, 'UserPageNew'>;

export default function UserScreen() {

    const navigation = useNavigation<NavProps>();

    const [isPressedPeople, setIsPressedPeople] = useState(false);
    const [isPressedTicket, setIsPressedTicket] = useState(false);
    const [isPressedQR, setIsPressedQR] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>QR Fast</Text>
            <Text style={styles.subtitle}>Seja bem-vindo!</Text>


            <Button
                rota="UserPage"
                titulo="🎉 Eventos"
                subtitulo="Ver e comprar ingressos"
            />

            <Button
                rota="IngressosComprados"
                titulo="🎟️ Ingressos"
                subtitulo="Ver ingressos adquiridos"
            />

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
        marginBottom: 32,
        color: '#666',
    },
});