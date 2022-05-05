
import React from 'react';
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/app.Theme';




export const CalculadoraScreen = () => {

    const {
        numero,
        numeroAnterior,
        armarNumero,
        calcular,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
    } = useCalculadora();

    return (
        <View style={styles.CalculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                )
            }
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
                <BotonCalc text="/" color="#FF9427" onPress={btnDividir} />

            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>

                <BotonCalc text="7" onPress={armarNumero} />
                <BotonCalc text="8" onPress={armarNumero} />
                <BotonCalc text="9" onPress={armarNumero} />
                <BotonCalc text="X" color="#FF9427" onPress={btnMultiplicar} />

            </View>


            {/* Fila de botones */}
            <View style={styles.fila}>

                <BotonCalc text="4" onPress={armarNumero} />
                <BotonCalc text="5" onPress={armarNumero} />
                <BotonCalc text="6" onPress={armarNumero} />
                <BotonCalc text="-" color="#FF9427" onPress={btnRestar} />

            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>

                <BotonCalc text="1" onPress={armarNumero} />
                <BotonCalc text="2" onPress={armarNumero} />
                <BotonCalc text="3" onPress={armarNumero} />
                <BotonCalc text="+" color="#FF9427" onPress={btnSumar} />

            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>

                <BotonCalc text="0" ancho onPress={armarNumero} />
                <BotonCalc text="." onPress={() => armarNumero('.')} />
                <BotonCalc text="=" color="#FF9427" onPress={calcular} />

            </View>
        </View>
    );
};
