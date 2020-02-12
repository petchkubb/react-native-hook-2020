import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button
				title="Go to Components Demo"
				onPress={() => {
					navigation.navigate('Component')
				}}
			/>
			<Button
				title="Go to List Demo"
				onPress={() => {
					navigation.navigate('List')
				}}
			/>
		</View>
	)
}

export default HomeScreen
