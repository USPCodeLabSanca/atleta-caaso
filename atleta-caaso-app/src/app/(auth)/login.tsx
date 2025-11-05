import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import pigIcon from '../../../assets/images/Pig.png';
import FloatButton from '../../../components/ButtonAuth';
import InputAuth from '../../../components/InputAuth';

export default function Login() {
    const [usp, setUsp] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter();

    return (
        <ImageBackground
            style={style.container}
            source={require('../../../assets/images/BackgroundImage.png')}
        >
            <View style={style.Logo}>
                <Image source={require('../../../assets/images/CaasoLogo.png')} />
            </View>

            <View>

                <View style={style.circle}>
                    <View style={style.LoginItens}>
                        <InputAuth
                            placeholder="Numero USP"
                            value={usp}
                            color="black"
                            onChangeText={setUsp}
                            icon={<MaterialCommunityIcons name="pig-variant" size={40} color="black" />}
                            maxLength={10} // limita a 10 dígitos (não sei qunto é o número USP padrão)
                            keyboardType="numeric" //teclado numerico
                        />
                        <InputAuth
                            placeholder="Senha"
                            value={senha}
                            color="black"
                            onChangeText={setSenha}
                            icon={<MaterialIcons name="lock" size={40} color="black" />}
                            isPassword={true} //campo de senha (com olinho para mostrar a senha)
                        />

                        <FloatButton
                            text="Login"
                            backgroundColor="#ffe32eff"
                            textColor="black"
                            backgroundIconSource={pigIcon}
                        />
                    </View>

                    <View style={style.textLogin}>
                        <TouchableOpacity onPress={() => router.push('/forgotPassword')}>
                            <Text style={[style.text, style.link]}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/register')}>
                            <Text style={[style.text, style.link]}>Criar uma conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171616',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    text: {
        color: 'white',
    },

    link: {
        textDecorationLine: 'underline',
    },

    circle: {
        width: 2000,
        height: 2000,
        borderRadius: 5000,
        paddingTop: 130,
        backgroundColor: '#FFCA29',
        opacity: 0.81,
        alignItems: 'center',
        left: 100,
    },

    pos_circle: {
        paddingLeft: 300,
    },

    Logo: {
        paddingTop: 80,
        paddingBottom: 60,
    },

    LoginItens: {
        right: 100,
        gap: 20,
    },

    textLogin: { 
        flexDirection: 'row',
        gap: 50,
        fontSize: 40,
        marginTop: 20,
        right: 100
    },
});

// tela de login feita, falta adicionar campo para insercao de dados