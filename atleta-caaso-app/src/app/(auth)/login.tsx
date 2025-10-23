import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import FloatButton from '@/components/ButtonAuth'

export default function Login() {
    return (
        <ImageBackground
            style={style.container}
            source={require('@/assets/images/BackgroundImage.png')}
        >
            
            <View
            style={style.Logo}
            >
                <Image 
                source={require('@/assets/images/CaasoLogo.png')}
                />
            </View>

            <View
                style={style.pos_circulo}
            >
                <View
                style={style.circulo}
                >

                    <FloatButton
                    text="Login"
                    backgroundColor="#F0D400"
                    textColor="white"
                    >

                    </FloatButton>

                </View>

            </View>
            
        </ImageBackground>
    )
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

    circulo: {
        width: 2000,
        height: 2000,
        borderRadius: 5000,
        paddingTop: 300,
        backgroundColor: '#FFCA29',
        opacity: 0.81,
    },

    pos_circulo: {
        paddingLeft: 300,
    },

    Logo: {
        paddingTop: 80,
        paddingBottom: 60,
    }
});

// tela de login, bem chucra, apenas criada e laceada com a verificacao 