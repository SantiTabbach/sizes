import { UnistylesRegistry } from 'react-native-unistyles';

import { autoScalePlugin } from './plugins/scale.plugin';
import { Theme } from './themes';

type AppThemes = {
	light: typeof Theme;
	dark: typeof Theme;
};

declare module 'react-native-unistyles' {
	export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
	light: Theme,
	dark: Theme,
}).addConfig({
	adaptiveThemes: true,
});

UnistylesRegistry.addConfig({
	plugins: [autoScalePlugin],
});
