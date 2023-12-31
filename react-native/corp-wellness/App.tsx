// Library import 
import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Button} from 'react-native'
import * as SecureStore from "expo-secure-store";
import { ModalProvider, createModalStack } from 'react-native-modalfy'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

//  Component import
import Header from './src/components/header'
import Progress from './src/components/progress'
import Schedule from './src/components/schedule'
import Nav from './src/components/nav'
import SignInWithOAuth from './src/components/sign-in/SignInWithOAuth';
import MessageSentModal from './src/components/modal/MessageSentModal'
import LogoutModal from './src/components/modal/LogoutModal'
import React from 'react';

//modal stack
const modalConfig = { MessageSentModal, LogoutModal }
const defaultOptions = { backdropOpacity: 0.6 }
const stack = createModalStack(modalConfig, defaultOptions)

// Clerk key yeah its public because somehow env variable is not working
const publishableKey = 'pk_test_cmVsZXZhbnQtamF5YmlyZC04OS5jbGVyay5hY2NvdW50cy5kZXYk'

// SecureStore for token caching
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

// const SignOut = () => {
//   const { isLoaded,signOut } = useAuth();
//   if (!isLoaded) {
//     return null;
//   }
//   return (
//     <View>
//       <Button
//         title="Sign Out"
//         onPress={() => {
//           signOut();
//         }}
//       />
//     </View>
//   );
// };

export default function App() {
	return (
    <GestureHandlerRootView style={{flex:1}}>
      
        <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
          <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
            
            {/* This is for the signed in user */}
            <SignedIn>
              <ModalProvider stack={stack}>
                <View style={styles.container}>
                  <Header />
                  <Text style={styles.greetText}>Your Progress</Text>
                  <Progress />
                  <Schedule />
                  {/* <SignOut/> */}
                  <Nav/>
                  {/* modal here incoming */}
                </View>
              </ModalProvider>
            </SignedIn>

            {/* This is for the signed out user, 
            user gonna be prompt to sign in*/}
            <SignedOut>
              <SignInWithOAuth />
            </SignedOut>

          </SafeAreaView>
        </ClerkProvider>
      
      
    </GestureHandlerRootView>
    
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal:16
	},
  greetText: {
    color: '#29274C',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    left: -115,
  },
})