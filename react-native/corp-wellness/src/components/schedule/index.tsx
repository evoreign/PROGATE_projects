import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Color, color as colorScheme } from '../../constant'
import React from 'react'
import ScheduleSection from './ScheduleSection'

interface Card {
	title: string
	description: string
	color?: Color
}

const obj: Card[] = [
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
		color: 'yellow',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
		color: 'yellow',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
		color: 'yellow',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
		color: 'yellow',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
		color: 'yellow',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
		color: 'yellow',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
		color: 'yellow',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
		color: 'yellow',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
		color: 'yellow',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
	},
]

const Schedule = (props) => {
	const windowHeight = Dimensions.get('window').height/2;
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.textDate}>Wednesday, March </Text>
				<Text>Icon Date</Text>
			</View>
			<ScrollView
				style={{ maxHeight: windowHeight, borderColor: 'green', borderWidth: 2 }}
			>
				<View style={styles.sectionContainer}>
					{obj.map((item) => (
						<ScheduleSection
							description={item.description}
							title={item.title}
						/>
					))}
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		//backgroundColor: '#fff',
		flexDirection: 'column',
		//borderColor: 'red',
		// borderWidth: 2,
	},
	textDate: {
		fontSize: 20,
		fontWeight: '600',
		left: 14,
	},
	header: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
	},
	sectionContainer: {
		flex: 4,
		width: '100%',
		rowGap: 8,
	},
})

export default Schedule