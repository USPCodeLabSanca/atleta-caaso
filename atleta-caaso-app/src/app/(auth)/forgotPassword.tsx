import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import pigIcon from '../../../assets/images/Pig.png';
import BackButton from '../../../components/BackButton';
import FloatButton from '../../../components/ButtonAuth';
import InputAuth from '../../../components/InputAuth';

export default function Register() {
    const [email, setEmail] = useState('');

    return (
        <ImageBackground
            style={style.container}
            source={require('../../../assets/images/BackgroundImage.png')}
        >
            <BackButton/>
            <View style={style.pos_circle}>
                <View style={style.circle}>
                    <View style={style.Itens}>
                        <View>
                            <Text style={style.text}>Digite um email para</Text>
                            <Text style={style.text}>recuperar sua senha:</Text>
                        </View>
                        
                        <InputAuth
                            placeholder="Email"
                            value={email}
                            color="black"
                            onChangeText={setEmail}
                            icon={<MaterialCommunityIcons name="email" size={40} color="black" />}
                            keyboardType="email-address" //teclado email
                        />

                        <FloatButton
                            text="Confirmar"
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

    Itens: {
        right: 100,
        gap: 25,
    },
});