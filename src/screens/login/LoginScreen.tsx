import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';

// Pegamos a largura da tela para definir limites nos input
const { width } = Dimensions.get('window');

type NavProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation<NavProps>();

  const validaLogin = () => {
    const emailValido = /\S+@\S+\.\S+/.test(email);

    if (email === "atleticaif" && senha === "linguica") {
      navigation.navigate('Administração');
      return;
    }
    if (email === "a" && senha === "a") {
      navigation.navigate('UserPage');
      return;
    }
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    if (!emailValido) {
      Alert.alert("Erro", "Digite um e-mail válido!");
      return;
    }

    setEmail('');
    setSenha('');
  }

  return (
    // KeyboardAvoidingView evita que o teclado cubra os inputs no iOS/Android
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
        <View style={styles.container}>

          <View style={styles.headerContainer}>
            <Text style={styles.title}>QR Fast</Text>
            <Text style={styles.subtitle}>Faça seu login</Text>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder='Digite seu email'
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={setSenha}
              placeholder='Digite sua senha'
              secureTextEntry
            />

            <TouchableOpacity
              onPress={validaLogin}
              style={styles.button}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Log-in</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('RecuperarSenha')}
              style={styles.buttonRecuperarSenha}
            >
              <Text style={styles.linkText}>Recuperar Senha</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={styles.buttonCadastro}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonCadastroText}>Cadastro</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f2e9',
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'space-between',
  },
  headerContainer: {
    marginTop: '10%',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
    marginTop: 5,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    color: 'black',
    backgroundColor: '#FFF',
    height: 55,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: '#276818',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '60%',
    marginTop: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#fff'
  },
  buttonRecuperarSenha: {
    marginTop: 15,
    alignItems: 'center',
  },
  linkText: {
    color: 'blue',
    fontSize: 14,
  },
  footerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonCadastro: {
    backgroundColor: '#209d04',
    paddingVertical: 15,
    borderRadius: 30,
    width: '80%',
    maxWidth: 300,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonCadastroText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  }
});