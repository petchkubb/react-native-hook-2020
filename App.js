import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './src/pages/Home'
import ListScreen from './src/pages/List'
import Component from './src/pages/Components'
import ImageScreen from './src/pages/Image'

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
				<Stack.Screen
					name="Image"
					component={ImageScreen}
					options={{ title: 'ImageScreen' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
