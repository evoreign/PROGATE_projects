import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color as colorScheme } from '../../constant'

type Card = {
	title: string
	description: string
	color?: string
}

const ScheduleSection: React.FC<Card> = (props) => {
	const { description, title, color } = props
	return (
		<View style={styles.section}>
			<Text style={styles.hourSection}>Text jam</Text>
			<View
				style={[
					styles.card,
					{ backgroundColor: color ? color : colorScheme.orange },
				]}
			>
				<Text>Title</Text>
				<Text>Description</Text>
				<View style={styles.bottomCard}>
					<Text>Icon profile picture</Text>
					<Text>Hours text</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	section: {
		flex: 1,
		flexDirection: 'row',
		height: 100,
	},
	hourSection: {
		flex: 1,
	},
	card: {
		flex: 4,
		padding: 8,
		borderRadius: 8,
		height: 100,
		justifyContent: 'space-between',
	},
	bottomCard: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		// borderColor: 'red',
		// borderWidth: 2,
	},
})

export default ScheduleSection