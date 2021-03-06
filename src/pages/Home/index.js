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
			<Button
				title="Go to Couter number Demo"
				onPress={() => {
					navigation.navigate('Counter')
				}}
			/>
			<Button
				title="Go to Color Screen Demo"
				onPress={() => {
					navigation.navigate('Color')
				}}
			/>
			<Button
				title="Go to Sqaure Screen Demo"
				onPress={() => {
					navigation.navigate('Square')
				}}
			/>
			<Button
				title="Go to Text Screen Demo"
				onPress={() => {
					navigation.navigate('Text')
				}}
			/>
			<Button
				title="Go to Box Screen Demo"
				onPress={() => {
					navigation.navigate('Box')
				}}
			/>
		</View>
	)
}

export default HomeScreen
