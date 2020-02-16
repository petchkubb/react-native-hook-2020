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
			<Button
				title="Go to Image Screen"
				onPress={() => {
					navigation.navigate('Image')
				}}
			/>
		</View>
	)
}

export default HomeScreen
