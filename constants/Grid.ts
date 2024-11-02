import { generateElementsArray } from '@/utils/array';
import { Dimensions } from 'react-native';

export const GRID_SIZE = 100;

const { width, height } = Dimensions.get('screen');
const numOfRows = Math.round(width / GRID_SIZE) + 1;
const numOfCols = Math.round(height / GRID_SIZE) + 1;

export const rows = generateElementsArray(numOfRows);
export const columns = generateElementsArray(numOfCols);
