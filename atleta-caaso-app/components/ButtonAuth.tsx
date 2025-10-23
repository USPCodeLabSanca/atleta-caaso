import React from 'react';
import { View, StyleSheet, Pressable, GestureResponderEvent, TouchableOpacity, Text} from 'react-native'

type ButtonProps = {
    text: string;
    onPress?: (event: GestureResponderEvent) => void;
    backgroundColor?: string;
    textColor?: string;
}

export default function FloatButton({
    text,
    onPress,
    backgroundColor,
    textColor,
}: ButtonProps) {
    return (
        <TouchableOpacity
            style={[style.button, {backgroundColor}]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text
            style={[style.text, {color: textColor}]}
            >
                {text}
            </Text>

            
        </TouchableOpacity>
    );
}



const style = StyleSheet.create({
    button: {
        
    },

    text: {

    }
})