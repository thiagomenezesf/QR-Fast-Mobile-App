import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native'; 
import UserEventsScreen from '../userPage/UserEventsScreen';

type NavProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation<NavProps>();

  const validaLogin = () => {
    const emailValido = /\S+@\S+\.\S+/.test(email);

    if(email === "atleticaif" && senha === "linguica") {
      navigation.navigate('Administração');
    }

    if(email === "a" && senha === "a") {
      navigation.navigate('UserPage');
    }

    if(!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      console.log("ERRO")
      return;
    }
    if(!emailValido) {
      Alert.alert("Erro", "Digite um e-mail válido!");
    }

    setEmail('');
    setSenha('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Fast</Text>
      <Text style={styles.subtitle}>Faça seu login</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput style={styles.input} value={email} onChangeText={(texto) => setEmail(texto)} placeholder='Digite seu email' />

      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} value={senha} onChangeText={(texto) => setSenha(texto)} placeholder='Digite sua senha' secureTextEntry />

      <TouchableOpacity
        onPress={() => validaLogin()}
        style={styles.button}
        activeOpacity={0.8} 
      >
        <Text style={{fontFamily: 'Gill Sans, sans-serif', fontWeight: 'bold', fontSize: 17, color: '#fff'}}>Log-in</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => navigation.navigate('RecuperarSenha')}
        style={styles.buttonRecuperarSenha}
        activeOpacity={0.8} 
      >
        <Text style={{fontFamily: 'Gill Sans, sans-serif', fontSize:13}}>Recuperar Senha</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}
        style={styles.buttonCadastro}
        activeOpacity={0.8}
      >
        <Text style={{textAlign: 'center', fontFamily: 'Gill Sans, sans-serif', fontWeight: 'bold', fontSize: 22, color: '#fff'}}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f2e9',
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
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    backgroundColor: '#FFF',
    height: 55,
    borderRadius: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 8
  },
  button: {
    backgroundColor: '#103d06',
    height: 35,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1fa402',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    fontFamily: 'Gill Sans, sans-serif',
    fontWeight: 'bold',
    paddingHorizontal: 35,
    width: 150,
    marginBottom: 6,
    fontSize: 14,
    opacity: 0.9
  },
  buttonRecuperarSenha: {
    height: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1fa402',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    fontFamily: 'Gill Sans, sans-serif',
    paddingHorizontal: 35,
    minWidth: 150,
    marginBottom: 13,
    fontSize: 10
  },

  buttonCadastro: {
    marginTop: 180,
    backgroundColor: '#209d04',
    paddingVertical: 15,
    borderRadius: 50,
    minWidth: 220,
    opacity:0.8
  }
});
