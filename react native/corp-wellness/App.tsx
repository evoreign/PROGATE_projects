import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import { StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native'
import Header from './src/components/header'
import Progress from './src/components/progress'
import Schedule from './src/components/schedule'
import Nav from './src/components/nav'
import SignInWithOAuth from './src/components/signin/SignInWithOAuth'
const publishableKey = 'pk_test_cmVsZXZhbnQtamF5YmlyZC04OS5jbGVyay5hY2NvdW50cy5kZXYk'
export default function App() {
	return (
    <ClerkProvider publishableKey={publishableKey}>
      <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
        
        {/* This is for the signed in user */}
        <SignedIn>
          <View style={styles.container}>
            <Header />
            <Progress />
            <Schedule />
            <Nav/>
            {/* modal here incoming */}
          </View>
        </SignedIn>

        {/* This is for the signed out user, 
        user gonna be prompt to sign in*/}
        <SignedOut>
          <SignInWithOAuth />
        </SignedOut>


      </SafeAreaView>
    </ClerkProvider>
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
})