import { Image, Text, View } from 'react-native';
import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
const Avatar = require('@/assets/images/avatar.png');

const Profile = () => {
	const { styles } = useStyles(stylesheet);
	return (
		<View style={styles.container}>
			<Image source={Avatar} style={{ width: 80, height: 80 }} />
			<View>
				<Text style={styles.name}>Santi Tabbach</Text>
				<Text style={styles.description}>SSR React Engineer</Text>
			</View>
		</View>
	);
};

export default Profile;

const stylesheet = createStyleSheet((theme) => ({
	container: {
		position: 'absolute',
		flexDirection: 'row',
		gap: 20,
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: 'white',
		borderRadius: 100,
		borderWidth: 1,
		borderColor: theme.colors['lava-stone'],
		padding: 10,
		bottom: 50,
		width: '90%',
	},
	name: {
		fontSize: 40,
		fontWeight: '600',
	},
	description: {
		fontSize: 20,
		fontWeight: '500',
		opacity: 0.6,
	},
}));
