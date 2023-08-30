import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { useUser, useAuth } from "@clerk/clerk-expo";

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [showSignOut, setShowSignOut] = useState(false);
  const { signOut } = useAuth();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.greetText}>Hello, {user.firstName}</Text>
      <TouchableOpacity onPress={() => setShowSignOut(true)}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
            height: 56,
            width: 56,
          }}
          style={styles.profileImage}
        />
      </TouchableOpacity>
      {showSignOut && (
        <View style={styles.signOutContainer}>
          <Text>Do you want to sign out?</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Sign Out"
              onPress={() => {
                signOut();
                setShowSignOut(false);
              }}
            />
            <Button
              title="Cancel"
              onPress={() => setShowSignOut(false)}
              color="gray"
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  greetText: {
    color: '#29274C',
    fontSize: 28,
    fontWeight: '700',
  },
  profileImage: {
    borderColor: '#E7E6F0',
    borderWidth: 2,
    borderRadius: 9999,
  },
  signOutContainer: {
    position: 'absolute',
    top: 130, 
    right: 2,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    elevation: 5,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
