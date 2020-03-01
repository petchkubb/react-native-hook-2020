import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
	const [password, setPaswword] = useState('')
	return (
		<View>
			<Text>Enter Password</Text>
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={text => setPaswword(text)}
			/>
			{password.length < 5 && (
				<Text>Password must be longer than 5 characters</Text>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderLeftColor: 'black',
		borderWidth: 1,
	},
})

export default TextScreen
