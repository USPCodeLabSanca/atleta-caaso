import React from 'react';
import { GestureResponderEvent, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
    textColor,
    backgroundIconSource,
    text,
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
                    style={[style.text, {color: textColor}]}
                >
                    {text}

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
        fontSize: 24,
        fontFamily: 'Jaro-Regular',
        fontWeight: 'bold',
        textAlign: 'center',
        
    },

    backgroundIcon: {
        position: 'absolute',
        top: '-30%',
        width: 40,
        left: '30%',
        opacity: 0.5,
    },
})