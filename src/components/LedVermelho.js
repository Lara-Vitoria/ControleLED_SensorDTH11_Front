import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Switch } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import axios from 'axios';

export default function LedVermelho() {

    //led vermelho
    const [isLedVermelho, setLedVermelho] = useState(false);

    //muda estado do switch
    const onSwitchLedVermelho = () => {
        setLedVermelho(estadoAnterior => !estadoAnterior);
    }

    //envia comando para apagar/ligar led vermelho
    const ledVermelho = () => {
        if (isLedVermelho == false) {
            axios.get('http://192.168.0.107/onred').then(res => {
                console.log('led vermelho ligado');
            }).catch((error => {
                console.log(error);
                Alert.alert('Não foi possivel acender a led vermelha')
            }))
        }

        else {
            axios.get('http://192.168.0.107/offred').then(res => {
                console.log('led vermelho desligado');
            }).catch((error => {
                console.log(error);
                Alert.alert('Não foi possivel apagar a led vermelha')
            }))
        }
    }

    return (
        <>
            <View style={styles.tituloContainer}>
                <MaterialIcons name='lightbulb-outline' size={25} color={'#fff'} />
                <TouchableOpacity
                    activeOpacity={1}
                    title="Led Vermelha">
                    <Text style={styles.tituloText}>LED Vermelha</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.status}>
                <Text style={isLedVermelho ? styles.ON : styles.OFF}>
                    {isLedVermelho ? 'LIGADO' : 'DESLIGADO'}
                </Text>

                <Switch
                    onValueChange={onSwitchLedVermelho}
                    value={isLedVermelho}
                    onChange={ledVermelho} />
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
        paddingRight: 24
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