import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import * as Progress from 'react-native-progress';
export default function InitialScreen() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress >= 1) {
                    clearInterval(interval);
                    return 1;
                }
                return prevProgress + 0.01;
            });
        }, 100); // Actualiza el progreso cada 100ms

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/FastCal.png')} style={styles.image} />
            <Progress.Bar progress={progress} width={200} color="#39A7FF" animated={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        height: 500,
        width: 500,
        
    }
});
