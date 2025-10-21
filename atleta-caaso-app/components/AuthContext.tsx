import React, { createContext, useContext, useState, ReactNode } from 'react';

// declaramos a interface e a guarda as funcoes e o user
interface AuthContextData {
    user: any;
    login: () => void;
    logout: () => void;
}

// criamos a interface e deixamos ela vazia por enquanto sendo apenas o molde
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

//componente que abraca o aplicativo
// children é uma propriedade que coloca todos dentro dele próprio
export function AuthProvider({ children }: {children: ReactNode}) {
    // aqui está a memoria, e cria a variavel user como useState para poder mexer a tela ao mudar ela
    // null para quando iniciar o app ninguem estiver logado
    // a unica funcao que pode mudar o user é o setUser 
    const [user, setUser] = useState<any>(null);

    //essa sao funcoes que outras telas podem chamar 

    // login uma o setUser para mudar o estado de user de null para um objeto, considerando logado (funcao chamada pela login.tsx)
    const login = () => {
        setUser({ name: 'Usuario Teste'});
    };

    // funcao chamada pela home.tsx e usa o setUser para mudar o estado de user para null e deslogar o usuario
    const logout = () => {
        setUser(null);
    };

    // retorna o quadro de avisos/interface sendo um objeto que contem: estado do user, funcao login e funcao logout
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

// um atalho para facilitar a vida, para quando precisar importar useContext/AuthContext entao ao inves disso usamos a funcao useAuth()
export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

// Componente para verificar se a pessoa esta ou nao logada ao iniciar o app
// central de informacoes que liga as telas para verificacao 
