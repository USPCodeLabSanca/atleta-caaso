import { Drawer } from 'expo-router/drawer'

export default function Layout() {
    return(
        <Drawer>
            <Drawer.Screen 
            name="home"
            options={{ title: "Painel"}}
            />
        </Drawer>
    )
}

// _layout.tsx criado com drawer, para o menu lateral da pagina home