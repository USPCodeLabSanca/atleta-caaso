import { Stack } from 'expo-router';


export default function AuthLayout() {
  
  return (
    <Stack 
        // tira o header
        screenOptions={{headerShown: false,}}
    >
    </Stack>
  );
}

// esse _layout.tsx dentro do (auth) serve para redirecionar as telas de register e login para fazer aquela animacao de subida da tela e nao tiver ligada a 
// outras telas 