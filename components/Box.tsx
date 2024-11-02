import { View } from 'react-native';
import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const Box = ({
	size = 50,
	color = 'white',
}: {
	size?: number;
	color?: string;
}) => {
	const { styles } = useStyles(stylesheet);
	return <View style={[styles.box(size), { backgroundColor: color }]} />;
};

export default Box;

const stylesheet = createStyleSheet((theme) => ({
	box: (size: number) => ({
		width: size,
		height: size,
		borderWidth: 1,
		borderColor: theme.colors['lava-stone'],
	}),
}));
