import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import FloatButton from '@/components/ButtonAuth'
import pigIcon from '@/assets/images/Pig.png'

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

            <View>
                <View>
                    <Text>
                        Imput de ID
                    </Text>
                    
                </View>

                
                <View
                style={style.circle}
                >

                    <View 
                        style={style.LoginItens}    
                    >


                        <FloatButton
                        text="Login"
                        backgroundColor="#ffe32eff"
                        textColor="white"
                        backgroundIconSource={pigIcon}
                        >

                        </FloatButton>

                        <Text>

                        </Text>

    

                    </View>

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

    circle: {
        width: 2000,
        height: 2000,
        borderRadius: 5000,
        paddingTop: 300,
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
        paddingTop: 10,
    },

});

// tela de login feita, falta adicionar campo para insercao de dados