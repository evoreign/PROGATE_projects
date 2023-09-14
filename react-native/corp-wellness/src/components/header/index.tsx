import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { useUser, useAuth } from "@clerk/clerk-expo";
import { useModal } from 'react-native-modalfy'

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [showSignOut, setShowSignOut] = useState(false);
  const { signOut } = useAuth();
//modal here
  const  { openModal } = useModal()
  const SendMessage=()=> openModal('LogoutModal')
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.greetText}>Hello, {user.firstName}!</Text>
      <TouchableOpacity onPress={() => SendMessage()}>
        <Image
          source={{
            uri: user.imageUrl,
            height: 66,
            width: 66,
          }}
          style={styles.profileImage}
        />
      </TouchableOpacity>
      {showSignOut && (
        <View style={styles.signOutContainer}>
		  <Text>Signed in as {user.emailAddresses[0]?.emailAddress}</Text>
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
    paddingTop: 40,
    paddingBottom: 30,
    flex: 0,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  greetText: {
    color: '#29274C',
    fontSize: 28,
    left: 10,
    fontWeight: 'bold',
  },
  profileImage: {
    borderColor: '#E7E6F0',
    borderWidth: 2,
    borderRadius: 9999,
  },
  signOutContainer: {
    position: 'absolute',
    top: 10, 
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
