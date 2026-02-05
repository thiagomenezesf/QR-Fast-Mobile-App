import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

type NavProps = NativeStackNavigationProp<RootStackParamList, 'PessoaDetalhes'>;

export default function PeopleListScreen() {
    const navigation = useNavigation<NavProps>();

    return (
        <View>
            <Text>ADASDAW</Text>
        </View>
    )
}