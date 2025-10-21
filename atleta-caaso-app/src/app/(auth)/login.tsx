import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default function Login() {
    return (
        <View style={style.container}>
            <Text style={style.text}>
                Pagina Login
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171616',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'white',
    }
});

// tela de login, bem chucra, apenas criada e laceada com a verificacao 