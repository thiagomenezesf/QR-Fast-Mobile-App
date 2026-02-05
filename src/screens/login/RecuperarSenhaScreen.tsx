import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native'; 

type NavProps = NativeStackNavigationProp<RootStackParamList, 'RecuperarSenha'>;

export default function RecuperarSenhaScreen() {
      
    const navigation = useNavigation<NavProps>();
    return (
        <View style={styles.container}>
            <Text style={styles.default}>Esta tela está em manutenção!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
    },
    default: {
        fontSize: 30,
    }
});