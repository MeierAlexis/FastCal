import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NextButton from './components/NextButton'; // Asegúrate de que el componente esté exportado correctamente

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Nico</Text>
      <NextButton text = "Next" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
