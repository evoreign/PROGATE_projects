import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Progress from './src/components/progress';
import Nav from './src/components/nav';
import Header from './src/components/header';
import Schedule from './src/components/schedule';
import Modal from './src/components/modal';
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Progress/>
      <Schedule/>
      <Nav />
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
