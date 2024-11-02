import { View } from 'react-native';
import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const Circles = () => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<View
			style={[styles.circle(5), { backgroundColor: theme.colors.cobalite }]}
		>
			<View style={[styles.circle(4), { backgroundColor: theme.colors.sky }]}>
				<View
					style={[
						styles.circle(3),
						{ backgroundColor: theme.colors['glitter-shower'] },
					]}
				>
					<View
						style={[
							styles.circle(2),
							{ backgroundColor: theme.colors['light-tuquoise'] },
						]}
					>
						<View
							style={[
								styles.circle(1),
								{ backgroundColor: theme.colors['herb-blend'] },
							]}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Circles;

const stylesheet = createStyleSheet((theme) => ({
	circle: (n: number) => ({
		justifyContent: 'center',
		alignItems: 'center',
		width: 40 * n,
		height: 40 * n,
		borderColor: theme.colors['lava-stone'],
		borderWidth: 2,
		borderRadius: 20 * n,
	}),
}));
