import { Tabs } from 'expo-router'

export default function Layout() {
    return(
        <Tabs>
            <Tabs.Screen 
            name="home"
            options={{ title: "Painel"}}
            />
        </Tabs>
    )
}

// _layout.tsx criado como tabs, para poder funcionar o menu de tabs no inferior do app, com o calendario, ranking, membros 