import React, { useRef } from 'react'; //useRef crea una referencia mutable que persiste durante el ciclo de vida completo del componente.
import { Pressable, Text, StyleSheet, Dimensions, Animated } from 'react-native';


const { width } = Dimensions.get('window');

const NextButton = ({ onPress, text, buttonStyle, textStyle }) => {
const scale = useRef(new Animated.Value(1)).current; // inicializa la escala del botón a 1

const handlePressIn = () => {
    Animated.spring(scale, {
    toValue: 0.95,
    useNativeDriver: true, //Estas animaciones estan hechas por Gpt, pero basicamente aumenta y disminuye la escala del boton
    }).start(); //useNativeDriver es para utilizar la animación nativa de React Native, para mejora el rendimiento
};

const handlePressOut = () => {
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
        style={[styles.button, buttonStyle]}
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
    backgroundColor: '#39A7FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: width * 0.2, // 80% del ancho de la pantalla
    borderRadius: 10,
    alignItems: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    elevation: 10,
    borderWidth: 2,
    borderColor: '#fff',
},
buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textAlign: 'center',
},
});

export default NextButton;
