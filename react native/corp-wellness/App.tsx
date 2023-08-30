import { ClerkProvider } from '@clerk/clerk-expo'
import { StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native'
import Header from './src/components/header'
import Progress from './src/components/progress'
import Schedule from './src/components/schedule'
import Nav from './src/components/nav'

const publishableKey = 'pk_test_cmVsZXZhbnQtamF5YmlyZC04OS5jbGVyay5hY2NvdW50cy5kZXYk'
export default function App() {
	return (
    <ClerkProvider publishableKey={publishableKey}>
      <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
        <View style={styles.container}>
          <Header />
          <Progress />
          <Schedule />
          <Nav/>
          {/* modal here incoming */}
        </View>
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