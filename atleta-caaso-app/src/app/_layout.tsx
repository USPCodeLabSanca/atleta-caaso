import { SplashScreen, Stack } from 'expo-router';
import { AuthProvider } from '@/components/AuthContext'; // (Ou '../components/AuthContext' se @/ não funcionar)
import { useFonts, Jaro_400Regular } from '@expo-google-fonts/jaro';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() { 
    const [fontsLoaded, fontError] = useFonts({
    'Jaro-Regular': Jaro_400Regular,
});

useEffect(() => {
    if (fontsLoaded || fontError) {
        SplashScreen.hideAsync();
    }
}, [fontsLoaded, fontError]);

if (!fontError && !fontsLoaded) {
    return null;
}

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