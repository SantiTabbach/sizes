import Box from '@/components/Box';
import Circles from '@/components/Circles';
import GridBackground from '@/components/Grid';
import Profile from '@/components/Profile';
import Texts from '@/components/Texts';
import { Theme } from '@/style/themes';
import { View } from 'react-native';

export default function HomeScreen() {
	return (
		<GridBackground>
			<View style={{ flex: 1, position: 'relative' }}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Circles />
					<View style={{ flexDirection: 'row' }}>
						<View style={{ alignItems: 'flex-end' }}>
							<Box size={25} color={Theme.colors.cobalite} />
							<Box size={25} color={Theme.colors.red} />
						</View>
						<View style={{ alignItems: 'flex-end' }}>
							<Box color={Theme.colors['glitter-shower']} />
							<Box size={25} color={Theme.colors.red} />
						</View>
						<View style={{ alignItems: 'flex-end' }}>
							<Box size={75} color={Theme.colors.cobalite} />
							<Box size={25} color={Theme.colors.red} />
						</View>
						<Box size={100} color={Theme.colors['glitter-shower']} />
					</View>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Texts />
					<View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<Box size={100} color={Theme.colors['herb-blend']} />
							<Box size={100} color={Theme.colors['light-tuquoise']} />
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<Box size={100} color={Theme.colors['light-tuquoise']} />
							<Box size={100} color={Theme.colors['herb-blend']} />
						</View>
					</View>
				</View>
				<Profile />
			</View>
		</GridBackground>
	);
}
