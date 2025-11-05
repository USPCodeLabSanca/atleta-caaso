import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ImageSourcePropType, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

type InputProps = {
    placeholder: string;
    value: string;
    color?: string;
    onChangeText: (text: string) => void;
    icon?: ImageSourcePropType | React.ReactNode;
    iconSize?: number;
    isPassword?: boolean;
    maxLength?: number;
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
};

export default function InputAuth({
    placeholder,
    value,
    color = '#000',
    onChangeText,
    icon,
    iconSize = 30,
    isPassword = false,
    maxLength,
    keyboardType,
}: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const renderIcon = () => {
        if (!icon) return null;

        // se for um elemento React (ex: <MaterialIcons ... />), clonamos para aplicar cor/tamanho
        if (React.isValidElement(icon)) {
            return (
                <View style={style.iconWrapper}>
                    {React.cloneElement(icon as React.ReactElement<any>, {
                        color,
                        size: iconSize,
                    })}
                </View>
            );
        }

        // caso contrário, assumimos que é uma fonte de imagem (require(...))
        return (
            <Image
                source={icon as ImageSourcePropType}
                style={[style.icon, { tintColor: color }]}
                resizeMode="contain"
            />
        );
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChangeText = (text: string) => {
        // Se keyboardType for numeric, remove caracteres não numéricos
        if (keyboardType === 'numeric') {
            text = text.replace(/[^0-9]/g, '');
        }
        onChangeText(text);
    };

    return (
        <View style={style.container}>
            {renderIcon()}
            <TextInput
                style={[style.input, { color }]}
                placeholder={placeholder}
                placeholderTextColor={color ? undefined : '#999'}
                value={value}
                onChangeText={handleChangeText}
                secureTextEntry={isPassword && !showPassword}
                maxLength={maxLength}
                keyboardType={keyboardType}
            />
            {isPassword && (
                <TouchableOpacity onPress={togglePasswordVisibility} style={style.eyeIcon}>
                    <MaterialIcons 
                        name={showPassword ? "visibility-off" : "visibility"} 
                        size={24} 
                        color={color}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 12,
    },
    iconWrapper: {
        width: 36,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 12,
    },
    input: {
        flex: 1,
        padding: 12,
        fontSize: 16,
    },
    eyeIcon: {
        padding: 10,
        position: 'absolute',
        right: 0,
    },
});