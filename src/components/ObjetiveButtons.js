import React, { useRef, useState } from 'react'; //useRef crea una referencia mutable que persiste durante el ciclo de vida completo del componente.
import { Pressable, Text, StyleSheet, Dimensions, Animated } from 'react-native';


const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const NextButton = ({ onPress, text, buttonStyle, textStyle }) => {
const scale = useRef(new Animated.Value(1)).current; // inicializa la escala del botón a 1
const [isPressed, setIsPressed] = useState(false);
    const handlePressIn = () => {
    setIsPressed(true);
    Animated.spring(scale, {
    toValue: 0.98,
    useNativeDriver: true, //Estas animaciones estan hechas por Gpt, pero basicamente aumenta y disminuye la escala del boton
    }).start(); //useNativeDriver es para utilizar la animación nativa de React Native, para mejora el rendimiento
};

    const handlePressOut = () => {
    setIsPressed(false);
    Animated.spring(scale, { // Animated.spring crea una animacion de resorte de la vida real, lo simula 
    toValue: 1,
    useNativeDriver: true,
    }).start(() => {
    if (onPress) {
        onPress();
    }
    });
};

return (
    <Animated.View style={{ transform: [{ scale }] }}>
    <Pressable
        style={[styles.button, isPressed ? styles.buttonPressed : styles.button]}
        onPressIn={handlePressIn} // Esto es para manejar las animaciones
        onPressOut={handlePressOut} // Cuando se aprieta el boton se ejecutan las funciones de arriba 
    >
            <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </Pressable>
    </Animated.View>
);
};

const styles = StyleSheet.create({
button: {
    backgroundColor: '#87C4FF',
        paddingVertical: 12,
        margin: 20,
    height: height * 0.15,
    paddingHorizontal: 20,
    width: width * 0.8, // 80% del ancho de la pantalla
    borderRadius: 10,
    alignItems: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    elevation: 10,
    borderWidth: 2,
        borderColor: '#fff',
    justifyContent: 'center',
},
buttonText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'sans-serif',
    fontStyle: 'helvetica',
    fontWeight: 'bold',
    textAlign: 'center',
    },
    buttonPressed: {
    opacity:0.5,
    },
});

export default NextButton;
