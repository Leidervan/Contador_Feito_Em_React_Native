import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Incremento from './Components/Incremento';

export default function App() {
  return (
    <View style={styles.container}>
      <Incremento/>
      <Text style={styles.corDoTexto}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ac',
    alignItems: 'center',
    justifyContent: 'center',
  },

corDoTexto:{
  color: "white"
}

});
