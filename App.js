import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NextButton from './src/components/NextButton'; // Asegúrate de que el componente esté exportado correctamente
import InitialScreen from './src/screens/InitialScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <InitialScreen />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
