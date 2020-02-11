import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './pages/Home'
import ListScreen from './pages/List'

const Stack = createStackNavigator()

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={ListScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
