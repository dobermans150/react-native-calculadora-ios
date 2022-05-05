/* eslint-disable curly */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/app.Theme';

export const CalculadoraScreen = () => {


    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const limpiar = () => {
        setNumero('0');
    };

    const armarNumero = (numeroTexto: string) => {
        // No aceptar doble punto

        if (numero.includes('.') && numeroTexto === '.') return;
        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                // Evaluar si es otro cero, y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);

                // Evaluar si es diferente de cero y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                if (numero.startsWith('-0')) {
                    setNumero('-' + numeroTexto);
                } else {
                    setNumero(numeroTexto);

                }

                //Evitar el 0000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);
            } else {
                setNumero(numero + numeroTexto);

            }
        } else {

            if (numero.startsWith('-')) {
                const numeroSinNegativo = numero.replace('-', '');
                setNumero('-' + numeroSinNegativo + numeroTexto);
            } else {
                setNumero(numero + numeroTexto);
            }
        }


    };

    const btnDelete = () => {

        if (numero.length <= 1 || (numero.startsWith('-')) && numero.length === 2) {
            setNumero('0');
        } else {
            setNumero(numero.substring(0, numero.length - 1));
        }
    };

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        }
        else {
            setNumero('-' + numero);
        }
    };

    return (
        <View style={styles.CalculadoraContainer}>
            <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            {/* Fila de botones */}
            <View style={styles.fila}>

                <BotonCalc text="C" color="#9B9B9B" onPress={limpiar} />
                <BotonCalc text="+/-" color="#9B9B9B" onPress={positivoNegativo} />
                <BotonCalc text="del" color="#9B9B9B" onPress={btnDelete} />
                <BotonCalc text="/" color="#FF9427" onPress={limpiar} />

            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>

                <BotonCalc text="7" onPress={armarNumero} />
                <BotonCalc text="8" onPress={armarNumero} />
                <BotonCalc text="9" onPress={armarNumero} />
                <BotonCalc text="X" color="#FF9427" onPress={limpiar} />

            </View>


            {/* Fila de botones */}
            <View style={styles.fila}>

                <BotonCalc text="4" onPress={armarNumero} />
                <BotonCalc text="5" onPress={armarNumero} />
                <BotonCalc text="6" onPress={armarNumero} />
                <BotonCalc text="-" color="#FF9427" onPress={limpiar} />

            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>

                <BotonCalc text="1" onPress={armarNumero} />
                <BotonCalc text="2" onPress={armarNumero} />
                <BotonCalc text="3" onPress={armarNumero} />
                <BotonCalc text="+" color="#FF9427" onPress={limpiar} />

            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>

                <BotonCalc text="0" ancho onPress={armarNumero} />
                <BotonCalc text="." onPress={() => armarNumero('.')} />
                <BotonCalc text="=" color="#FF9427" onPress={limpiar} />

            </View>
        </View>
    );
};
