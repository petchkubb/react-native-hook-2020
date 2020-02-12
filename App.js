import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './pages/Home'
import ListScreen from './pages/List'
import Component from './pages/Components'

const Stack = createStackNavigator()
function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: 'Home' }}
				/>
				<Stack.Screen
					name="List"
					component={ListScreen}
					options={{ title: 'List' }}
				/>
				<Stack.Screen
					name="Component"
					component={Component}
					options={{ title: 'Component' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
