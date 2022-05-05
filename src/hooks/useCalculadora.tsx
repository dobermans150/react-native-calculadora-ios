/* eslint-disable curly */
import { useRef, useState } from 'react';
import { Operadores } from '../enums/operadores';

export const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
        ultimaOperacion.current = undefined;
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
            } else if (numero === 'Infinity' || numero === 'NaN') {
                setNumero(numeroTexto);

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

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }

        setNumero('0');
    };

    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    };

    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    };

    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    };

    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    };

    const calcular = () => {
        const numero1 = Number(numero);
        const numero2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${numero1 + numero2}`);
                break;
            case Operadores.restar:
                setNumero(`${numero2 - numero1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${numero1 * numero2}`);
                break;
            case Operadores.dividir:
                setNumero(`${numero2 / numero1}`);
                break;
        }

        setNumeroAnterior('0');
        ultimaOperacion.current = undefined;
    };

    return {
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        positivoNegativo,
        calcular,
    }
}
