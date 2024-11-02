import { columns, GRID_SIZE, rows } from '@/constants/Grid';
import React, { PropsWithChildren } from 'react';
import { Dimensions, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const { width, height } = Dimensions.get('screen');

const GridBackground = ({ children }: PropsWithChildren) => {
	const { styles } = useStyles(stylesheet);

	return (
		<View style={styles.container}>
			<View style={[styles.grid, { flexDirection: 'row' }]}>
				{rows.map((n) => (
					<View key={`col-${n}`} style={[styles.verticaLine, { height }]} />
				))}
			</View>
			<View style={[styles.grid, { flexDirection: 'column' }]}>
				{columns.map((n) => (
					<View key={`row-${n}`} style={[styles.horizontalLine, { width }]} />
				))}
			</View>
			<View style={styles.content}>{children}</View>
		</View>
	);
};

export default GridBackground;

const stylesheet = createStyleSheet((theme) => ({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	grid: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		columnGap: GRID_SIZE,
		rowGap: GRID_SIZE,
	},
	verticaLine: {
		backgroundColor: theme.colors.gray,
		width: 1,
	},
	horizontalLine: {
		backgroundColor: theme.colors.gray,
		height: 1,
	},
	content: {
		flex: 1,
	},
}));
