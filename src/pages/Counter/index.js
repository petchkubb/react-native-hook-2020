import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const NUMBER = 1
const reducer = (state, action) => {
	// state === {counr: number}
	// tion === {type: 'increment' || 'decrement' , payload: 1}
	switch (action.type) {
		case 'Increase':
			return { ...state, count: state.count + action.payload }
		case 'Decrease':
			return { ...state, count: state.count - action.payload }
		default:
			return state
	}
}

const CouterScreen = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 })
	return (
		<View>
			<Button
				title="Increase"
				onPress={() => dispatch({ type: 'Increase', payload: NUMBER })}
			/>
			<Button
				title="Decrease"
				onPress={() => dispatch({ type: 'Decrease', payload: NUMBER })}
			/>
			<Text>Current Count: {state.count}</Text>
		</View>
	)
}

const styles = StyleSheet.create({})

export default CouterScreen
