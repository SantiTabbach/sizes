import { Text, View } from 'react-native';
import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const Texts = () => {
	const { styles } = useStyles(stylesheet);

	return (
		<View>
			<Text style={styles.text1}>Unistyles</Text>
			<Text style={styles.text2}>es la </Text>
			<Text style={styles.text3}>cabra</Text>
		</View>
	);
};

export default Texts;

const stylesheet = createStyleSheet(() => ({
	text1: {
		fontSize: 48,
		fontWeight: '900',
	},
	text2: {
		fontSize: 32,
		fontWeight: '400',
	},
	text3: {
		fontSize: 92,
		fontWeight: '100',
	},
}));
