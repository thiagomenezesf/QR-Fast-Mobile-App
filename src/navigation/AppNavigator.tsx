import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Event } from '../types/Event';
import AdmScreen from '../screens/adminPage/AdmScreen';
import LoginScreen from '../screens/login/LoginScreen';
import RecuperarSenhaScreen from '../screens/login/RecuperarSenhaScreen';
import PeopleListScreen from '../screens/adminPage/PeopleListScreen';
import TicketsScreen from '../screens/adminPage/TicketsScreen';
import ScannerScreen from '../screens/adminPage/ScannerScreen';
import PersonDetailScreen from '../screens/adminPage/PersonDetailScreen';
import RegistrationScreen from '../screens/login/RegistrationScreen';
import EventDetailScreen from '../screens/userPage/EventDetailScreen';
import UserEventsScreen from '../screens/userPage/UserEventsScreen';
import BuyTicketScreen from '../screens/userPage/BuyTicketScreen';
import BuyConfirmationScreen from '../screens/userPage/BuyConfirmationScreen';
import UserScreen from '../screens/userPage/UserScreen';
import PurchasedTicketsScreen from '../screens/userPage/PurchasedTicketsScreen';

export type RootStackParamList = {
  UserPage: undefined;
  Pessoas: undefined;
  PessoaDetalhes: { personId: string };
  Tickets: undefined;
  Scanner: undefined;
  Administração: undefined;
  RecuperarSenha: undefined;
  Login: undefined;
  Register: undefined;
  DetalhesEventos: { eventId: string };
  ComprarIngresso: { event: Event };
  ConfirmarCompra: { event: Event, quantity: number, total: number };
  UserPageNew: undefined;
  IngressosComprados: undefined;
};

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="UserPage" component={UserEventsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Administração" component={AdmScreen} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenhaScreen} />
        <Stack.Screen name="Pessoas" component={PeopleListScreen} />
        <Stack.Screen name="PessoaDetalhes" component={PersonDetailScreen} />
        <Stack.Screen name="Tickets" component={TicketsScreen} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="DetalhesEventos" component={EventDetailScreen} />
        <Stack.Screen name="ComprarIngresso" component={BuyTicketScreen} />
        <Stack.Screen name="ConfirmarCompra" component={BuyConfirmationScreen} />
        <Stack.Screen name="UserPageNew" component={UserScreen} />
        <Stack.Screen name="IngressosComprados" component={PurchasedTicketsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
