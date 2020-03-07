import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
	return (
		<View>
			<Text style={styles.textStyle}>App</Text>
			<View style={styles.viewStyle}>
				<View style={styles.boxOneStyle} />
				<View style={styles.boxTwoStyle} />
				<View style={styles.boxThreeStyle} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	textStyle: {
		borderWidth: 1,
		borderColor: 'black',
		justifyContent: 'center',
		textAlign: 'center',
	},
	viewStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	boxOneStyle: {
		borderColor: 'black',
		backgroundColor: 'red',
		width: 50,
		height: 50,
	},
	boxTwoStyle: {
		borderColor: 'black',
		backgroundColor: 'green',
		width: 50,
		height: 50,
		top: 20,
	},
	boxThreeStyle: {
		borderColor: 'black',
		backgroundColor: 'blue',
		width: 50,
		height: 50,
	},
})

export default BoxScreen
