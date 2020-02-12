import React from 'react'
import { View, Text } from 'react-native'

const Component = props => {
	console.log(props)
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Hello World!!!!</Text>
		</View>
	)
}

export default Component
