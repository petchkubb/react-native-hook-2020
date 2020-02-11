import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
	const friends = [
		{ name: 'Friend #1', age: '10' },
		{ name: 'Friend #2', age: '20' },
		{ name: 'Friend #3', age: '20' },
		{ name: 'Friend #4', age: '40' },
		{ name: 'Friend #5', age: '50' },
		{ name: 'Friend #6', age: '60' },
		{ name: 'Friend #7', age: '70' },
		{ name: 'Friend #8', age: '80' },
		{ name: 'Friend #9', age: '90' },
		{ name: 'Friend #10', age: '1000' },
	]
	return (
		<View>
			<FlatList
				data={friends}
				renderItem={renderItem}
				keyExtractor={(item, index) => String(index)}
			/>
		</View>
	)
}

const renderItem = ({ item }) => {
	return (
		<View>
			<Text style={styles.textStyle}>
				{item.name} - Age {item.age}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	textStyle: {
		paddingVertical: 30,
		marginHorizontal: 5,
		borderColor: 'black',
		borderWidth: 1,
	},
})

export default ListScreen
