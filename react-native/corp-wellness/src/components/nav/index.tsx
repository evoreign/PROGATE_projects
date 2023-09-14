import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Nav({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
	  <Text style={styles.buttonText}>|</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      {/* Add more buttons for other screens */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: '#29274C',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 35,
    elevation: 20,
  },
  button: {
    backgroundColor: '#29274C',
    marginRight: 20,
	marginLeft: 20,
  },
  buttonText: {
    color: '#fff',
  },
});
