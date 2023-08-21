import { client } from '../api/fetchClient';
import { Color } from '../types';

export const colorsService = {
  getColors: () => client.get<Color[]>('/colors'),
};
