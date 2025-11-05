import { useAuth } from '../../components/AuthContext';
import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native'; // (Opcional)

export default function Index() {
  const { user } = useAuth();
  
  // (Opcional) Mostra um "carregando" enquanto o useAuth decide
  // if (isLoading) {
  //    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator /></View>
  // }

  if (user) {
    // 1. Usuário está logado? Vá para a home.
    return <Redirect href="/home" />;
  } else {
    // 2. Usuário não está logado? Vá para a tela de login.
    return <Redirect href="/login" />;
  }
}