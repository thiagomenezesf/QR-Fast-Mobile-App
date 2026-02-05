import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

type Person = {
    id: string;
    name: string;
    email: string;
};

export default function PessoasScreen() {
    const [people, setPeople] = useState<Person[]>([
        { id: '1', name: 'João Silva', email: 'joao@email.com' },
        { id: '2', name: 'Maria Souza', email: 'maria@email.com' },
        { id: '1', name: 'João Silva', email: 'joao@email.com' },
        { id: '1', name: 'João Silva', email: 'joao@email.com' },
        { id: '1', name: 'João Silva', email: 'joao@email.com' },
        { id: '1', name: 'João Silva', email: 'joao@email.com' },
        { id: '1', name: 'João Silva', email: 'joao@email.com' },
        { id: '1', name: 'João Silva', email: 'joao@email.com' },
    ]);

    const [modalVisible, setModalVisible] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [selectedValue, setSelectedValue] = useState(null);

    const items = [
        { label: 'Festa 1', value: 'festa1' },
        { label: 'Festa 2', value: 'festa2' },
        { label: 'Festa 3', value: 'festa3' },
    ];

    function handleAddPerson() {
        const newPerson = {
            id: Date.now().toString(),
            name,
            email,
        };

        setPeople((prev) => [...prev, newPerson]);

        setName('');
        setEmail('');
        setModalVisible(false);

        // FUTURO:
        // gerar ingresso
        // enviar para conta do usuário
    }

    const renderItem = ({ item }: { item: Person }) => (
        <LinearGradient
            colors={['#b2d3bc', '#bed1c4', '#99b19f']}
            style={styles.card}
        >
            <Text style={styles.personName}>{item.name}</Text>
            <Text style={styles.personEmail}>{item.email}</Text>
        </LinearGradient>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pessoas com ingresso</Text>
            <Text style={styles.subtitle}>Gerencie os participantes</Text>

            <FlatList
                data={people}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 0 }}
                style={{ maxHeight: '78%' }}
            />

            {/* Botão flutuante */}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => setModalVisible(true)}
            >
                <LinearGradient
                    colors={['#3BB85E', '#0A7D27']}
                    style={styles.fabGradient}
                >
                    <Text style={styles.fabText}>+ Nova pessoa</Text>
                </LinearGradient>
            </TouchableOpacity>

            {/* Modal cadastro */}
            <Modal visible={modalVisible} animationType="slide">
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Cadastrar pessoa</Text>

                    <TextInput
                        placeholder="Nome"
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />

                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />

                    {/*->>>>> Lista dos eventos para escolher */}
                    <RNPickerSelect
                        onValueChange={(value) => setSelectedValue(value)}
                        items={items}
                        value={selectedValue}
                        placeholder={{ label: 'Selecione o evento', value: null }}
                        // style={}
                        useNativeAndroidPickerStyle={false} // IMPORTANTE: para o estilo do Android obedecer suas regras
                    />

                    <TouchableOpacity onPress={handleAddPerson}>
                        <LinearGradient
                            colors={['#3BB85E', '#0A7D27']}
                            style={styles.saveButton}
                        >
                            <Text style={styles.saveText}>Salvar e gerar ingresso</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={styles.cancel}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'black',
    },
    personName: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    personEmail: {
        color: '#fff',
        fontSize: 13,
    },
    fab: {
        position: 'absolute',
        bottom: '2.5%',
        right: '5%',
    },
    fabGradient: {
        paddingVertical: 16,
        paddingHorizontal: 22,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
    },
    fabText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    modalContainer: {
        flex: 1,
        backgroundColor: '#f3f2e9',
        padding: 20,
        justifyContent: 'center',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 14,
        marginBottom: 12,
        borderWidth: 1,
    },
    saveButton: {
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 1,
        marginTop: 10,
    },
    saveText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    cancel: {
        textAlign: 'center',
        marginTop: 20,
        color: '#666',
    },
});