import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Switch } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import axios from 'axios';

export default function LedVerde() {

    //led verde
    const [isLedVerde, setLedVerde] = useState(false);

    //muda estado do switch
    const onSwitchLedVerde = () => {
        setLedVerde(estadoAnterior => !estadoAnterior);
    }

    //envia comando para apagar/ligar led verde
    const ledVerde = () => {
        if (isLedVerde == false) {
            axios.get('http://192.168.0.107/ongreen').then(res => {
                console.log('led verde ligado');
            }).catch((error => {
                console.log(error);
                Alert.alert('Não foi possivel acender a led verde');
            }))
        }

        else {
            axios.get('http://192.168.0.107/offgreen').then(res => {
                console.log('led verde desligado');
            }).catch((error => {
                console.log(error);
                Alert.alert('Não foi possivel apagar a led verde');
            }))
        }
    }

    return (
        <>
            <View style={styles.tituloContainer}>
                <MaterialIcons name='lightbulb-outline' size={25} color={'#fff'} />
                <TouchableOpacity
                    activeOpacity={1}
                    title="Led Verde">
                    <Text style={styles.tituloText}>LED Verde</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.status}>
                <Text style={isLedVerde ? styles.ON : styles.OFF}>
                    {isLedVerde ? 'LIGADO' : 'DESLIGADO'}
                </Text>

                <Switch
                    onValueChange={onSwitchLedVerde}
                    value={isLedVerde}
                    onChange={ledVerde} />
            </View>

        </>
    )
};

const styles = StyleSheet.create({
    tituloContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#F1BCCE',
        height: "8%",
        width: "70%",
        marginLeft: "16%",
        borderRadius: 30,
        paddingTop: 16,
        marginTop: 16,
    },
    tituloText: {
        color: '#fff',
        letterSpacing: 5,
        paddingRight: 56
    },
    status: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16,
    },
    ON: {
        fontSize: 15,
        letterSpacing: 5,
        marginTop: 12,
        textAlign: 'justify',
        color: '#3AB9C9',
        fontWeight: 'bold',
    },
    OFF: {
        fontSize: 15,
        letterSpacing: 5,
        marginTop: 12,
        textAlign: 'justify',
        color: '#F1BCCE',
        fontWeight: 'bold',
    },
})