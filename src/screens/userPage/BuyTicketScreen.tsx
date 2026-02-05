import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { RootStackParamList } from '../../types/RootStackParamList';

type NavProps = NativeStackNavigationProp<RootStackParamList, 'ComprarIngresso'>;

export default function BuyTicketScreen() {

  const navigation = useNavigation<NavProps>();
  const route = useRoute<any>();

  const { event } = route.params;

  const [quantity, setQuantity] = useState(1);

  const ticketPrice =
    event.price === 'Gratuito' ? 0 : Number(event.price.replace('R$', '').replace(',', '.'));

  const total = ticketPrice * quantity;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comprar ingresso</Text>
      <Text style={styles.subtitle}>Confira os dados antes de confirmar</Text>

      {/* Resumo do evento */}
      <LinearGradient
        colors={['#b2d3bc', '#bed1c4', '#99b19f']}
        style={styles.card}
      >
        <Text style={styles.eventTitle}>{event.title}</Text>
        <Text style={styles.text}>📅 {event.date}</Text>
        <Text style={styles.text}>📍 {event.location}</Text>
      </LinearGradient>

      {/* Quantidade */}
      <LinearGradient
        colors={['#b2d3bc', '#bed1c4', '#99b19f']}
        style={styles.card}
      >
        <Text style={styles.sectionTitle}>Quantidade</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => setQuantity((q) => Math.max(1, q - 1))}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityValue}>{quantity}</Text>

          <TouchableOpacity
            onPress={() => setQuantity((q) => q + 1)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Total */}
      <LinearGradient
        colors={['#b2d3bc', '#bed1c4', '#99b19f']}
        style={styles.card}
      >
        <Text style={styles.sectionTitle}>Total</Text>
        <Text style={styles.total}>
          {total === 0 ? 'Gratuito' : `R$ ${total.toFixed(2).replace('.', ',')}`}
        </Text>
      </LinearGradient>

      {/* Aviso */}
      <Text style={styles.warning}>
        ⚠️ O ingresso é pessoal e intransferível. Após a confirmação, será gerado
        um QR Code único para entrada no evento.
      </Text>

      {/* Confirmar */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ConfirmarCompra', {
            event,
            quantity,
            total,
          })
        }
      >
        <LinearGradient
          colors={['#3BB85E', '#0A7D27']}
          style={styles.confirmButton}
        >
          <Text style={styles.confirmText}>Confirmar compra</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f2e9',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  text: {
    color: '#fff',
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#3BB85E',
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  quantityText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  quantityValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  total: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  warning: {
    textAlign: 'center',
    color: '#555',
    fontSize: 13,
    marginVertical: 10,
  },
  confirmButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    marginTop: 10,
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
