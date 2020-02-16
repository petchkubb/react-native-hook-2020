import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ image, title, score }) => {
	return (
		<View>
			<Image source={image} />
			<Text style={styles.text}>{title}</Text>
			<Text style={styles.text}>Image score - {score}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		marginVertical: 12,
	},
})

export default ImageDetail
