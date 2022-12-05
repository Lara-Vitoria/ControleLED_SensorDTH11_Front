import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Switch } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import axios from 'axios';

export default function Umidade() {
    //humidade
    const [isUmidade, setUmidade] = useState('--');
    const umidade = () => {
        axios.get('http://192.168.0.107/dht11/umi').then(res => {
            setUmidade(dhtHumidade => res.data);
            console.log(`dado recuperado. Humidade: ${isUmidade}%`);
        }).catch((error => {
            console.log(error);
            Alert.alert('Não foi possivel recuperar o valor da humidade')
        }))
    }

    return (
        <>
            <View style={styles.tituloContainer}>
                <MaterialIcons name='device-thermostat' size={25} color={'#fff'} />
                <TouchableOpacity
                    activeOpacity={1}
                    title="Umidade">
                    <Text style={styles.tituloText}>Umidade</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.status}>
                <Text style={styles.subtitulo}>
                    MEDIDA:
                    <Text style={styles.value}> {isUmidade}</Text>
                    %
                </Text>

                <View style={styles.button}>
                    <TouchableOpacity onPress={umidade}>
                        <MaterialIcons name='sync' size={25} color={'#fff'} />
                    </TouchableOpacity>
                </View>
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
    },
    subtitulo: {
        fontSize: 15,
        letterSpacing: 5,
        marginTop: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F1BCCE',
    },
    button: {
      alignSelf: 'center',
      backgroundColor: '#3AB9C9',
      marginTop: 25,
      borderRadius: 4,
    },
    value: {
      fontSize: 15,
      color: '#3AB9C9',
      fontWeight: 'bold',
    }
})