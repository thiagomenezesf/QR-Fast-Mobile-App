import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importações limpas via Barrel Files
import * as Login from '../screens/login';
import * as Admin from '../screens/adminPage';
import * as User from '../screens/userPage';
import { RootStackParamList } from '../types/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator id="MainStack" initialRouteName="Login" screenOptions={{ headerShown: true }}>

        {/* Grupo de Autenticação */}
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login.LoginScreen} />
          <Stack.Screen name="Register" component={Login.RegistrationScreen} />
          <Stack.Screen name="RecuperarSenha" component={Login.RecuperarSenhaScreen} />
        </Stack.Group>

        {/* Grupo Administrativo */}
        <Stack.Group screenOptions={{ headerShown: true, title: 'Painel Adm' }}>
          <Stack.Screen name="Administração" component={Admin.AdmScreen} />
          <Stack.Screen name="Pessoas" component={Admin.PeopleListScreen} />
          <Stack.Screen name="PessoaDetalhes" component={Admin.PersonDetailScreen} />
          <Stack.Screen name="Tickets" component={Admin.TicketsScreen} />
          <Stack.Screen name="Scanner" component={Admin.ScannerScreen} />
        </Stack.Group>

        {/* Grupo do Usuário */}
        <Stack.Group screenOptions={{ headerShown: true, title: 'Página do Usuário' }}>
          <Stack.Screen name="UserPage" component={User.UserEventsScreen} />
          <Stack.Screen name="DetalhesEventos" component={User.EventDetailScreen} />
          <Stack.Screen name="ComprarIngresso" component={User.BuyTicketScreen} />
          <Stack.Screen name="ConfirmarCompra" component={User.BuyConfirmationScreen} />
          <Stack.Screen name="UserPageNew" component={User.UserScreen} />
          <Stack.Screen name="IngressosComprados" component={User.PurchasedTicketsScreen} />
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
  );
}