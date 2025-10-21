import { Stack } from 'expo-router';
import { AuthProvider } from '@/components/AuthContext'; // (Ou '../components/AuthContext' se @/ não funcionar)

export default function RootLayout() { 
    return (
        
        <AuthProvider>
            
            <Stack>
                <Stack.Screen
                    name="home" 
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="(auth)"
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="index" 
                    options={{headerShown: false}}
                />
            </Stack>
        </AuthProvider>
    )
}

// _layout.tsx do projeto inteiro, para relacionar as telas de home, (auth) e index (tela de carregamento antes da tela de home ou login)