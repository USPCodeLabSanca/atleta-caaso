import React from 'react';
import { View, StyleSheet, Pressable, GestureResponderEvent, TouchableOpacity, Text, ImageSourcePropType, Image} from 'react-native'
import { useFonts } from 'expo-font';
import { Jaro_400Regular } from '@expo-google-fonts/jaro';

type ButtonProps = {
    text: string;
    onPress?: (event: GestureResponderEvent) => void;
    backgroundColor?: string;
    textColor?: string;
    backgroundIconSource?: ImageSourcePropType;
    iconSize?: number,
}

export default function FloatButton({
    onPress,
    backgroundColor,
    backgroundIconSource,
}: ButtonProps) {
    return (
        <TouchableOpacity
            style={[style.button, {backgroundColor}]}
            onPress={onPress}
            activeOpacity={0.6}
        >
            <View>

                <Image
                    source={backgroundIconSource}
                    style={style.backgroundIcon}
                />

                <Text
                    style={style.text}
                >
                    Login

                </Text>
                


            </View>

            
        </TouchableOpacity>
    );
}



const style = StyleSheet.create({

    button: {
        paddingVertical: 10,
        paddingHorizontal: 140,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        
    },

    text: {
        fontSize: 30,
        fontFamily: 'Jaro-Regular',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        
    },

    backgroundIcon: {
        position: 'absolute',
        top: '-25%',
        left: '8%',
    },
})