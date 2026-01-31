import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';

export default function ConfirmacaoCompraScreen() {
  const route = useRoute<any>();
  const { event, quantity, total } = route.params;

  // MOCK – isso vem da API de pagamento
  const pixPayload =
    '00020126580014BR.GOV.BCB.PIX0136brennogasparpinto@gmail.com5204000053039865405100.005802BR5925QR Fast Eventos6009SAO PAULO62070503***6304ABCD';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmação de pagamento</Text>
      <Text style={styles.subtitle}>Finalize o pagamento via Pix</Text>

      {/* Resumo */}
      <LinearGradient
        colors={['#b2d3bc', '#bed1c4', '#99b19f']}
        style={styles.card}
      >
        <Text style={styles.eventTitle}>{event.title}</Text>
        <Text style={styles.text}>🎟️ Quantidade: {quantity}</Text>
        <Text style={styles.text}>
          💰 Total:{' '}
          {total === 0
            ? 'Gratuito'
            : `R$ ${total.toFixed(2).replace('.', ',')}`}
        </Text>
      </LinearGradient>

      {/* Pix */}
      <LinearGradient
        colors={['#ffffff', '#f1f1f1']}
        style={styles.pixCard}
      >
        <Text style={styles.pixTitle}>Pague com Pix</Text>

        <QRCode value={pixPayload} size={200} />

        <Text style={styles.pixInfo}>
          Escaneie o QR Code acima no app do seu banco
        </Text>

        <Text style={styles.pixWarning}>
          ⏰ Pagamento válido por até 15 minutos
        </Text>
      </LinearGradient>

      {/* Ação */}
      <TouchableOpacity onPress={() => console.log('Verificando pagamento')}>
        <LinearGradient
          colors={['#3BB85E', '#0A7D27']}
          style={styles.confirmButton}
        >
          <Text style={styles.confirmText}>
            Já efetuei o pagamento
          </Text>
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
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
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
  pixCard: {
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  pixTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pixInfo: {
    marginTop: 10,
    textAlign: 'center',
  },
  pixWarning: {
    marginTop: 6,
    fontSize: 12,
    color: '#666',
  },
  confirmButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
