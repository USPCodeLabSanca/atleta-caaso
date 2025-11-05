import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import pigIcon from '../../../assets/images/Pig.png';
import BackButton from '../../../components/BackButton';
import FloatButton from '../../../components/ButtonAuth';
import InputAuth from '../../../components/InputAuth';

export default function Register() {
    const [usp, setUsp] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');


    return (
        <ImageBackground
            style={style.container}
            source={require('../../../assets/images/BackgroundImage.png')}
        >
            <BackButton/>
            <View style={style.pos_circle}>
                <View style={style.circle}>
                    <View style={style.RegisterItens}>
                        <InputAuth
                            placeholder="Nome Completo"
                            value={name}
                            color="black"
                            onChangeText={setName}
                            icon={<MaterialIcons name="person" size={40} color="black" />}
                        />
                        <InputAuth
                            placeholder="Apelido"
                            value={nickname}
                            color="black"
                            onChangeText={setNickname}
                            icon={<MaterialCommunityIcons name="pig" size={40} color="black" />}
                        />
                        <InputAuth
                            placeholder="Telefone"
                            value={telefone}
                            color="black"
                            onChangeText={setTelefone}
                            icon={<MaterialCommunityIcons name="phone" size={40} color="black" />}
                            maxLength={11} // limita a 11 dígitos (não sei qunto é o maximo de um telefone)
                            keyboardType="phone-pad" //teclado telefone
                        />
                        <InputAuth
                            placeholder="Email"
                            value={email}
                            color="black"
                            onChangeText={setEmail}
                            icon={<MaterialCommunityIcons name="email" size={40} color="black" />}
                            keyboardType="email-address" //teclado email
                        />
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

                        <InputAuth
                            placeholder="Confirme sua Senha"
                            value={confSenha}
                            color="black"
                            onChangeText={setConfSenha}
                            icon={<MaterialIcons name="lock" size={40} color="black" />}
                            isPassword={true} //campo de senha (com olinho para mostrar a senha)
                        />

                        <FloatButton
                            text="Sign Up"
                            backgroundColor="#ffe32eff"
                            textColor="black"
                            backgroundIconSource={pigIcon}
                        />
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
        fontSize: 30,
    },

    link: {
        textDecorationLine: 'underline',
    },

    circle: {
        width: 2000,
        height: 2000,
        borderRadius: 5000,
        paddingTop: 80,
        backgroundColor: '#FFCA29',
        opacity: 0.81,
        alignItems: 'center',
        left: 100,
    },

    pos_circle: {
        paddingTop: 80,
    },

    RegisterItens: {
        right: 100,
        gap: 15,
    },
});