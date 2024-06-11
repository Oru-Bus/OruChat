import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function HomeScreen({ navigation }) {
    const number = getRandomArbitrary(1, 1000);
    return (
        <View style={styles.homeHead}>
            <Text>Identifiant : {number}</Text>
        </View>
    );
}