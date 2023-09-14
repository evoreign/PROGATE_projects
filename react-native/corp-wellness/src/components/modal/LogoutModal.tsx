import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native'
import { useUser, useAuth } from "@clerk/clerk-expo";
import { useModal } from 'react-native-modalfy'


const LogoutModal = ({ modal: { closeModal }}) => {    
    const { isLoaded, isSignedIn, user } = useUser();
    const [showSignOut, setShowSignOut] = useState(false);
    const { signOut } = useAuth();
    return (
        <View style={styles.container}>
            <Text>Signed in as {user?.emailAddresses[0]?.emailAddress}</Text>
            <Text>Do you want to sign out?</Text>
            <Button onPress={closeModal} title="OK" />
            <Button 
            title="Sign Out" 
            onPress={() => { signOut(); 
                setShowSignOut(false);}}/>
        </View>
    )
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal:30
	},

})

export default LogoutModal