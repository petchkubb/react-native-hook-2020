import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../../Components/ImageDetail'

const ImageScreen = () => {
	return (
		<View style={styles.container}>
			<ImageDetail
				title="Forest"
				image={require('../../../assets/forest.jpg')}
				score="9"
			/>
			<ImageDetail
				title="Beach"
				image={require('../../../assets/beach.jpg')}
				score="7"
			/>
			<ImageDetail
				title="Mountain"
				image={require('../../../assets/mountain.jpg')}
				score="9"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 25,
	},
})

export default ImageScreen
