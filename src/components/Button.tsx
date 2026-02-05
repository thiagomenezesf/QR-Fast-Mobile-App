import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from "react";
import { RootStackParamList } from '../types/RootStackParamList';
import { useNavigation } from "@react-navigation/native";

interface Props {
    rota: keyof RootStackParamList;
    titulo: string;
    subtitulo: string;
}

export default function Button( { rota, titulo, subtitulo }: Props ){

    const navigation = useNavigation< NativeStackNavigationProp<RootStackParamList> >();

    const [isPressed, setIsPressed] = useState(false);

    return(
        <TouchableOpacity 
            onPressOut={() => setIsPressed(false)} 
            onPressIn={() => setIsPressed(true)} 
            onPress={() => navigation.navigate( rota as any )}
        >
            <LinearGradient
                colors={['#b2d3bc', '#bed1c4', '#99b19f', '#b2d3bc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={isPressed ? styles.buttonPressed : styles.button}
            >
                <Text style={styles.cardTitle}>{titulo}</Text>
                <Text style={styles.cardSubtitle}>{subtitulo}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
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
})