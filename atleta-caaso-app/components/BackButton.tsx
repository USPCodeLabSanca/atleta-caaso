import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function BackButton() {
    const router = useRouter();
    return (
        <View style={style.backButton}>
            <MaterialIcons name="arrow-back" size={30} color="white" onPress={() => router.back()} />
            <Text style={style.text} onPress={() => router.back()}>Voltar</Text>
        </View>
    );
}
const style = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 50,
        left: 15,
        zIndex: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    text: {
        color: 'white',
        fontSize: 23,
    }
});