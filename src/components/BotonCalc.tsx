/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/app.Theme';

interface Props {
    text: string,
    color?: '#9B9B9B' | '#2D2D2D' | '#FF9427',
    ancho?: boolean,
    onPress: (numeroTexto: string) => void,
}
export const BotonCalc = ({ text, color = '#2D2D2D', ancho = false, onPress }: Props) => {

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => onPress(text)}
        >
            <View
                style={{
                    ...styles.boton,
                    backgroundColor: color,
                    width: ancho ? 180 : 80,
                }}
            >
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === '#9B9B9B') ? 'black' : 'white',
                }}>{text}</Text>
            </View >
        </TouchableOpacity>

    );
};
