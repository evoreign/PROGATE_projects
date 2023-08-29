import { StyleSheet, Text, View } from 'react-native';

export default function Progress() {
  return (
    <View style={styles.container}>
      <Text>Progress</Text>
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