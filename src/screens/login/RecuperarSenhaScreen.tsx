import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native'; 

type NavProps = NativeStackNavigationProp<RootStackParamList, 'RecuperarSenha'>;

export default function RecuperarSenhaScreen() {
      
    const navigation = useNavigation<NavProps>();
    return (
        <View>
            <Text>AAAAA</Text>
        </View>
    )
}