import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type NavProps = NativeStackNavigationProp<RootStackParamList, 'DetalhesEventos'>;

export default function EventDetailsScreen() {

    const navigation = useNavigation<NavProps>();

    const route = useRoute<any>();
    const { eventId } = route.params || {};

    // Mock do evento (depois vem do banco)
    const event = {
        id: eventId,
        title: 'Festival de Música',
        date: '20/10/2026',
        location: 'São Paulo - SP',
        price: 'R$ 50,00',
        availableTickets: 120,
        banner:
            'https://images.unsplash.com/photo-1518972559570-7cc1309f3229',
        description:
            'Um grande festival com várias atrações nacionais e internacionais. Prepare-se para uma experiência inesquecível com música, comida e diversão.',
        rules: [
            'Entrada permitida apenas com ingresso válido',
            'Documento com foto obrigatório',
            'Proibida a entrada com bebidas externas',
            'Evento sujeito à lotação',
        ],
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Banner */}
            <Image source={{ uri: event.banner }} style={styles.banner} />

            {/* Conteúdo */}
            <LinearGradient
                colors={['#b2d3bc', '#bed1c4', '#99b19f']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.content}
            >
                <Text style={styles.title}>{event.title}</Text>

                <Text style={styles.info}>📅 {event.date}</Text>
                <Text style={styles.info}>📍 {event.location}</Text>
                <Text style={styles.price}>🎟️ {event.price}</Text>

                {/* Descrição */}
                <Text style={styles.sectionTitle}>Descrição</Text>
                <Text style={styles.text}>{event.description}</Text>

                {/* Ingressos */}
                <Text style={styles.sectionTitle}>Ingressos disponíveis</Text>
                <Text style={styles.text}>
                    {event.availableTickets > 0
                        ? `${event.availableTickets} ingressos restantes`
                        : 'Ingressos esgotados'}
                </Text>

                {/* Regras */}
                <Text style={styles.sectionTitle}>Regras do evento</Text>
                {event.rules.map((rule, index) => (
                    <Text key={index} style={styles.rule}>
                        • {rule}
                    </Text>
                ))}

                {/* Botão comprar */}
                <TouchableOpacity
                    disabled={event.availableTickets === 0}
                    style={{ marginTop: 30 }}
                    onPress={() => navigation.navigate('ComprarIngresso', { event }) }
                >
                    <LinearGradient
                        colors={
                            event.availableTickets > 0
                                ? ['#3BB85E', '#0A7D27']
                                : ['#999', '#777']
                        }
                        style={styles.buyButton}
                    >
                        <Text style={styles.buyButtonText}>
                            {event.availableTickets > 0
                                ? 'Comprar ingresso'
                                : 'Ingressos esgotados'}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </LinearGradient>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2e9',
    },
    banner: {
        width: '100%',
        height: '41%',
    },
    content: {
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
        borderWidth: 1,
        borderColor: 'black',
        height: '107%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    info: {
        color: '#fff',
        marginBottom: 4,
    },
    price: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 16,
        marginBottom: 6,
    },
    text: {
        color: '#fff',
        lineHeight: 20,
    },
    rule: {
        color: '#fff',
        marginBottom: 4,
    },
    buyButton: {
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
    },
    buyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
