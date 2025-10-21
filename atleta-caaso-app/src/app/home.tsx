import { StyleSheet, Text, View, Button} from 'react-native';
import { useAuth } from '../../components/AuthContext';
import { Redirect } from 'expo-router';

export default function Home() {
    const {user, logout} = useAuth();

    if (!user) {
        return <Redirect href="/login"/>;
    }

    return (
        <View style={styles.container}>
            <Text>
                Pagina HOME
            </Text>
        </View>
    );
}

// tela home, basica e sem nada por enquanto

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
